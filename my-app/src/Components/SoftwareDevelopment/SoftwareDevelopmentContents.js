
import "../SoftwareConsulting/Consulting.css"

import { Component } from "react";

import Image from "../../assets (1)/softwaredevelopment1.jpg";
import { SoftwareDevelopmentItems} from "../SoftwareConsulting/ConsultingItems";

class SoftwareDevelopment extends Component {
  render() {
    return (
      <><h1>Software Development</h1>
      <div className="underline"></div>
        <div className="section">
          <div className="overlap">
            <div>
              <div className="overlap-img">
                <img src={Image} alt="..." />
              </div>
            </div>
            <div className="overlap-desc">
            {SoftwareDevelopmentItems.map((Overlaptile) => {
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



export default SoftwareDevelopment;
