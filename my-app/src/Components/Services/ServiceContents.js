import "./ServiceContents.css";
import ServiceImgData from "./ServiceImgData";
import img1 from "../../assets (1)/consulting.png";
import img2 from "../../assets (1)/training.png";
import img3 from "../../assets (1)/Workforce Management.jpeg";
import img4 from "../../assets (1)/prodEngg.png";
import img5 from "../../assets (1)/Software Development.webp";
import img6 from "../../assets (1)/Skill Management.webp";
import img7 from "../../assets (1)/Internship.jpg"; //Taijasi
import { Link } from "react-router-dom";
import ServiceContentsDetails from "./ServiceContentsDetails";
import Marketing from "../../Pages/Marketing";
import ProductEngg from "../../Pages/ProdEngg";
import WorkforceManagement from "../../Pages/WorkforceManagement";
import SoftwareCons from "../../Pages/SoftwareCons";
import SkillManagement from "../../Pages/SkillManagement";
import SoftwareDevelopment from "../../Pages/SoftwareDevelopment";
import Internship from "../../Pages/Internship";

import RequestQuoteForm from "./RequestQuoteForm";


function ServiceContents() {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="request"> <RequestQuoteForm/></div>
     

      <div>
        <ServiceContentsDetails />
      </div>
      <div className="servicecard Home-Container">
      <Link to="/Marketing" > <ServiceImgData image={img2} text="Marketing" /> </Link> 
        <Link to="/ProductEngg"><ServiceImgData image={img4} text="Product Engineering" /></Link>
        <Link to="/WorkforceManagement"><ServiceImgData image={img3} text="Workforce Management" /> </Link>
        
      </div>
      <div className="servicecard Home-Container">
      <Link to="/SoftwareCons"><ServiceImgData image={img1} text="IT Consulting" /></Link>
       <Link to="/SkillManagement"><ServiceImgData image={img6} text="Skill Management" /></Link> 
       <Link to="/SoftwareDevelopment"> <ServiceImgData image={img5} text="Software Development" /></Link>
        <Link to="/Internship"><ServiceImgData image={img7} text="Internship & Training" /> </Link>
      </div>
    </div>
   
  );
}
export default ServiceContents;

