import "./ServiceContents.css";
import ServiceImgData from "./ServiceImgData";
import img1 from "../../assets (1)/consulting.png";
import img2 from "../../assets (1)/training.png";
import img3 from "../../assets (1)/Workforce Management.jpeg";
import img4 from "../../assets (1)/prodEngg.png";
import img5 from "../../assets (1)/Software Development.webp";
import img6 from "../../assets (1)/Skill Management.webp";
import ServiceContentsDetails from "./ServiceContentsDetails";

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
        <ServiceImgData image={img2} text="Marketing" />
        <ServiceImgData image={img4} text="Product Engineering" />
        <ServiceImgData image={img3} text="Workforce Management" />
      </div>
      <div className="servicecard Home-Container">
        <ServiceImgData image={img1} text="IT Consulting" />
        <ServiceImgData image={img6} text="Skill Management" />
        <ServiceImgData image={img5} text="Software Development" />
      </div>
    </div>
   
  );
}
export default ServiceContents;
