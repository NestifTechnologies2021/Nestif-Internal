import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.js";
import Services from "./Routes/Services";
import About from "./Routes/About";
import Media from "./Routes/Media";
import Careers from "./Routes/Careers";
import Contacts from "./Routes/Contacts";
import ProductEngg from "./Pages/ProdEngg.js";
import Marketing from "./Pages/Marketing.js";
import WhoWeAre from "./Pages/WhoWeAre.js";
import Aviation from "./Pages/Aviation.js";
import Retail from "./Pages/Retail.js";
import Insurance from "./Pages/Insurance.js";
import HealthCare from "./Pages/HealthCare.js";
import Education from "./Pages/Education.js";
import SoftwareCons from "./Pages/SoftwareCons.js";
import Businessstrategy from "./Pages/AI.js";
import Cloud from "./Pages/Cloud.js";
import Sustainability from "./Pages/Sustainablilty.js";
import DigitalTransform from "./Pages/DigitalTransform.js";
import CyberSecurity from "./Pages/CyberSecurity.js";
import ArtificialIntelligence from "./Pages/AI.js";
import WorkforceManagement from "./Pages/WorkforceManagement.js";
import SoftwareDevelopment from "./Pages/SoftwareDevelopment.js";
import SkillManagement from "./Pages/SkillManagement.js";


export default function App() {
  return (
    <div className="App HeroContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/productEngg" element={<ProductEngg />} />
        <Route path="/softwareconsulting" element={<SoftwareCons />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/artificialintelligence" element={<ArtificialIntelligence  />}/>
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/sustainabilty" element={<Sustainability />} />
        <Route path="/digitaltransformation" element={<DigitalTransform />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/workforcemanagement" element={<WorkforceManagement />} />
        <Route path="/softwaredevelopment" element={<SoftwareDevelopment/>} />
        <Route path="/skilldevelopment" element={<SkillManagement />} />
        <Route element={<Error />} />
      </Routes>
    </div>
  );
}
