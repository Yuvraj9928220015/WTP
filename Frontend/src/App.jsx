import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Clients from "./Components/Clients/Clients"
// import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
// import WorkGrid from "./Components/Work/WorkGrid";
import Awards from "./Components/Awards/Awards";
import Team from "./Components/Page/Team/Team";
import ModernArchitecture from "./Components/Page/Architectural/ModernArchitecture/ModernArchitecture";
import LandscapeArchitecture from "./Components/Page/Architectural/LandscapeArchitecture/LandscapeArchitecture";
import InteriorDesigning from "./Components/Page/Architectural/InteriorDesigning/InteriorDesigning";
import CivilEngineering from "./Components/Page/Architectural/CivilEngineering/CivilEngineering";
import Upcoming from "./Components/Page/Architectural/Upcoming/Upcoming";
import Sculptures from "./Components/Page/Architectural/Sculptures/Sculptures";
import Monuments from "./Components/Page/Architectural/Monuments/Monuments";
import Conservation from "./Components/Page/Architectural/Conservation/Conservation";
import Lllumination from "./Components/Page/Architectural/Lllumination/Lllumination";
import Heritage from "./Components/Page/Architectural/Heritage/Heritage";
import Sustainability from "./Components/Page/Sustainability/Sustainability";
import News from "./Components/Page/News/News";
import HeritageDetails from "./Components/Page/Architectural/Heritage/HeritageDetails";
import ModernArchitectureDetailPage from "./Components/Page/Architectural/ModernArchitecture/ModernArchitectureDetailPage";
import DesignDetailPage from "./Components/Page/Architectural/InteriorDesigning/DesignDetailPage";
import UrbanTransformation from './Components/Page/Architectural/UrbanTransformation/UrbanTransformation';
import ChambalRiverFront from './Components/Page/Architectural/ChambalRiverFront/ChambalRiverFront';
import CityPark from './Components/Page/Architectural/CityPark/CityPark';
import Home from './Components/Home/Home';
// import Banner from './Components/Banner/Banner';
import ViewPage1 from './Components/Home/SectionProject/ViewPage1/ViewPage1';
import Hospitals from './Components/Page/Architectural/Hospitals/Hospitals';
import Hotels from './Components/Page/Architectural/Hotels/Hotels';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Clients" element={<Clients />} />
          {/* <Route path="/Work" element={<Work />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/WorkGrid" element={<WorkGrid />} /> */}
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/ModernArchitecture" element={<ModernArchitecture />} />
          <Route path="/LandscapeArchitecture" element={<LandscapeArchitecture />} />
          <Route path="/InteriorDesigning" element={<InteriorDesigning />} />
          <Route path="/CivilEngineering" element={<CivilEngineering />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/Sculptures" element={<Sculptures />} />
          <Route path="/Monuments" element={<Monuments />} />
          <Route path="/Conservation" element={<Conservation />} />
          <Route path="/Lllumination" element={<Lllumination />} />
          <Route path="/Heritage" element={<Heritage />} />
          <Route path="/Sustainability" element={<Sustainability />} />
          <Route path="/News" element={<News />} />
          <Route path="/heritage/:id" element={<HeritageDetails />} />
          <Route path="/collections/:collectionId" element={<ModernArchitectureDetailPage />} />
          <Route path="/design/:id" element={<DesignDetailPage />} />
          <Route path="/UrbanTransformation" element={<UrbanTransformation />} />
          <Route path="/ChambalRiverFront" element={< ChambalRiverFront />} />
          <Route path="/CityPark" element={< CityPark />} />
          <Route path="/ViewPage1" element={< ViewPage1 />} />
          <Route path="/Hospitals" element={< Hospitals />} />
          <Route path="/Hotels" element={< Hotels />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}