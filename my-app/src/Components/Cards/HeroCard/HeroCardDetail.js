import { HeroCardItemsRow1, HeroCardItemsRow2, HeroCardItemsRow3 } from "./HeroCardItems";
import { AiFillCaretRight } from "react-icons/ai";
import "./HeroCard.css";
function HeroCardDetail() {
  return (
    <>
    <div className="flex cardcont">


  <div className="flex">
  {HeroCardItemsRow1.map((Herocards) => {
        return (
          <div>
          <li className="hero-cards" key={Herocards.id}>
              <div className="cardHeading">
                <h4>{Herocards.heading}</h4>
                <p>{Herocards.paragraph}</p>
              </div>
              </li>         
          </div> 
          );
        })}
  </div>
 

<div className="flex">
{HeroCardItemsRow2.map((Herocards) => {
        return (
          <div>
          <li className="hero-cards" key={Herocards.id}>
          <div className="cardHeading">
                <h4>{Herocards.heading}</h4>
                <p>{Herocards.paragraph}</p>
              </div>
              </li>         
          </div> 
          );
        })}
</div>
     
              
     <div className="flex">
{HeroCardItemsRow3.map((Herocards) => {
        return (
          <div>
          <li className="hero-cards" key={Herocards.id}>
          <div className="cardHeading">
                <h4>{Herocards.heading}</h4>
                <p>{Herocards.paragraph}</p>
              </div>
              </li>         
          </div> 
          );
        })}
</div>

     </div>    
    </>
  );
}

export default HeroCardDetail;
