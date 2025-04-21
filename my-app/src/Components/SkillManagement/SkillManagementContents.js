
// import "../Cards/TextBesideImg/TextBesideImage.css"
import "../SoftwareConsulting/Consulting.css"

import { Component } from "react";

import Image from "../../assets (1)/skill.jpeg";
import { WorkforceItems } from "../SoftwareConsulting/ConsultingItems";

class Consulting extends Component {
  render() {
    return (
      <><h1>Skill Development</h1>
      <div className="underline"></div>
      <img src={Image} alt="..." style={{width:"100vw"}}/>
        
      </>
    );
  }
}



export default Consulting;
