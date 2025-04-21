
// import "../Cards/TextBesideImg/TextBesideImage.css"
import "./Consulting.css"

import { Component } from "react";
import { OverlapTilesItems } from "./ConsultingItems";

import Image from "../../assets (1)/consulting1.jpeg";

class Consulting extends Component {
  render() {
    return (
      <><h1>Software Consulting</h1>
      <div className="underline"></div>
        <div className="section">
          <div className="overlap">
            <div>
              <div className="overlap-img">
                <img src={Image} alt="..." />
              </div>
            </div>
            <div className="overlap-desc">
            {OverlapTilesItems.map((Overlaptile) => {
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
