import { TextOverlapItems } from "./TextOverlapItems";
import "./TextOverlap.css";
import Image from "../../assets (1)/asset 1.jpeg";
function TextOverlap() {
  return (
    <>
      <div className="Text-Cont">
        <div className="Text-section">
          <div className="Text-overlap flex">
            <div className="Text-overlap-img">
              <img src={Image} alt="..." />
            </div>
            <div className="Text-Overlap-Container">
            {TextOverlapItems.map((tile) => {
              return (
               
                  
                    <li key={tile.id}className="Text-overlap-desc">
                    <div className="Text-overlap-contents"> 
                      <h4>{tile.title}</h4>
                      <p>{tile.subtitle}</p>
                      <p>{tile.content}</p>
                      </div>
                    </li>
                 
               
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TextOverlap;
