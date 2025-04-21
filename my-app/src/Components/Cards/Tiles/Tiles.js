
import { TilesItems } from "./TilesItems";

import { FaArrowRight } from "react-icons/fa";

import "./Tiles.css";
function Tiles()  {
 
    return (
      <><div className="Home-Container">
       <div className="tiles-container">
        {TilesItems.map((tiles) => {
          return (
           
              <li key={tiles.id} className="tiles">
                <h4>{tiles.heading}</h4>
                <hr className="underline" />
                <p>{tiles.text}</p>
                <a href="/whoweare">
                  Learn More <FaArrowRight />
                </a>
              </li>
      
          );
        })}
        </div>
        </div>
      </>
    );
  }

export default Tiles;
