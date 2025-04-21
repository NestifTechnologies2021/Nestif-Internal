import { Component } from "react";
import { HeroTilesItems } from "./HeroTilesItems";
import Image from "../../assets (1)/prodEngg.png";
import "./HeroTiles.css";

class HeroTiles extends Component {
  render() {
    return (
      <>
        <div className="flex Home-Container Herotiles-container hero">
          <div>
            {HeroTilesItems.map((Herotiles) => {
              return (
                  <li key={Herotiles.id} className="hero-desc"> 
                    <h4>{Herotiles.heading}</h4>
                    <p>{Herotiles.subheading}</p>
                    <p>{Herotiles.text}</p>
                    </li>
                  );
                })}
          </div>
          <div className="hero-img">
            <img src={Image} alt="..." />
          </div>
        </div>{" "}
      </>
    );
  }
}
export default HeroTiles;
