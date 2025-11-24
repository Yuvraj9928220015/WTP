import React, { useEffect, useRef } from 'react';
import "./Home.css"
import SectionProject from "./SectionProject/SectionProject"
import Slider from "./Slider/Slider"
// import Banner from "./Banner/Banner"
import UrbanDevelopment from "./UrbanDevelopment/UrbanDevelopment"
import Header from '../Header/Header';

export default function Home() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1;
                this.vy = (Math.random() - 0.5) * 1;
                this.radius = Math.random() * 1 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = '#f3b71ecc';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const particleCount = window.innerWidth < 768 ? 80 : 150;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const drawLines = () => {
            const maxDistance = 150;
            ctx.shadowBlur = 0;
            ctx.shadowColor = 'transparent';

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3;
                        ctx.strokeStyle = `rgba(218, 165, 32, ${opacity})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };


        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // ctx.fillStyle = '#272727';
            ctx.fillStyle = '#ffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.shadowBlur = 0;
            ctx.shadowColor = 'transparent';

            drawLines();

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <div className="home-wrapper">
                <canvas ref={canvasRef} className="particle-canvas" />
                <div className="content-wrapper">
                    {/* <Banner /> */}
                    <Header/>
                    <Slider />
                    <SectionProject />
                    <UrbanDevelopment />
                </div>
            </div>
        </>
    );
}