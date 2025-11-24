const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 7040;

// Import Contact model
const Contact = require("./Modal/contactModal");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true
}));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MongoDB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/WTP";

mongoose.connect(MONGO_URL)
    .then(() => console.log("✅ Mongoose Connected to MongoDB"))
    .catch(error => console.error("❌ Database Connection Error:", error));

app.get("/", (req, res) => {
    res.json({
        message: "Contact API is running!",
        endpoints: {
            "GET /": "Health check",
            "GET /contact": "Get all contacts",
            "POST /contact": "Create new contact",
            "DELETE /contact/:id": "Delete contact by ID",
            "GET /contact-form": "View contact form"
        }
    });
});

// Render contact form (EJS)
app.get("/contact-form", (req, res) => {
    res.render("contact");
});

// POST - Create new contact
app.post("/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        console.log("📝 Received contact form data:", req.body);

        // Validation
        if (!name || !email || !subject || !message) {
            console.log("❌ Validation failed: Missing required fields");
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
                required: ['name', 'email', 'subject', 'message']
            });
        }

        const newContact = new Contact({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim()
        });

        const savedContact = await newContact.save();
        console.log("✅ Contact data saved to database:", savedContact._id);

        res.status(201).json({
            success: true,
            message: 'Contact added successfully!',
            contact: {
                id: savedContact._id,
                name: savedContact.name,
                email: savedContact.email,
                subject: savedContact.subject,
                createdAt: savedContact.createdAt
            }
        });
    } catch (error) {
        console.error("❌ Error saving Contact:", error);
        res.status(500).json({
            success: false,
            message: "Server error while saving contact.",
            error: error.message
        });
    }
});

// GET - Get all contacts
app.get("/contact", async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        console.log(`📋 Retrieved ${contacts.length} contacts from database`);

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.error("❌ Error fetching contacts:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching contacts.",
            error: error.message
        });
    }
});

// GET - Get single contact by ID
app.get("/contact/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found"
            });
        }
        res.status(200).json({
            success: true,
            data: contact
        });
    } catch (error) {
        console.error("❌ Error fetching contact:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching contact.",
            error: error.message
        });
    }
});

// DELETE - Delete contact by ID
app.delete("/contact/:id", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found"
            });
        }
        console.log(`🗑️ Contact deleted: ${contact._id}`);
        res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
            data: contact
        });
    } catch (error) {
        console.error("❌ Error deleting contact:", error);
        res.status(500).json({
            success: false,
            message: "Server error while deleting contact.",
            error: error.message
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("❌ Server Error:", err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: err.message
    });
});

// Start server
app.listen(port, (err) => {
    if (err) {
        console.error("❌ Failed to start server:", err);
        return;
    }
    console.log(`🚀 Server started successfully on http://localhost:${port}`);
    console.log(`📋 View contact form at: http://localhost:${port}/contact-form`);
    console.log(`🔗 API endpoint: http://localhost:${port}/contact`);
});