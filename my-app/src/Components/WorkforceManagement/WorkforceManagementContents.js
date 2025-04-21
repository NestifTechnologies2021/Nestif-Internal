
// import "../Cards/TextBesideImg/TextBesideImage.css"
import "../SoftwareConsulting/Consulting.css"

import { Component } from "react";

import Image from "../../assets (1)/workforce.webp";
import { WorkforceItems } from "../SoftwareConsulting/ConsultingItems";

class Consulting extends Component {
  render() {
    return (
      <><h1>Workforce Management</h1>
      <div className="underline"></div>
        <div className="section">
          <div className="overlap">
            <div>
              <div className="overlap-img">
                <img src={Image} alt="..." />
              </div>
            </div>
            <div className="overlap-desc">
            {WorkforceItems.map((Overlaptile) => {
              return (
                
                  <li key={Overlaptile.id} className="overlap-contents">
                    
                    
                    <p>{Overlaptile.subtitle}</p>    
                   
                    <p>{Overlaptile.content}</p>
                    <p>{Overlaptile.text}</p>
                    <p>{Overlaptile.text2}</p>
                  </li>
               
              );
            })}
            </div>
          </div>
        </div>
      </>
    );
  }
}



export default Consulting;
