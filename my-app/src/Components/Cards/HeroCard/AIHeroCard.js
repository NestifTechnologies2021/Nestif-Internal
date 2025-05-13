import { AiFillCaretRight } from "react-icons/ai";
import "./HeroCard.css";

function HeroCardDetail() {
    const HeroCardItemsRow1 = [
        {
     id:1,
     heading: "AI",
     paragraph: "Refers to all stages involved in bringing a product from concept or idea through market release and beyond.It is the development of the fundamental software that provides a platform for application development.",
         
        },
        {
          id:2,
          heading: "ML",
          paragraph: "The combination of two words - Software Development, and  Operations. This allows a single team to handle the entire application. It reduces the disconnection between software developers, quality assurance (QA) engineers, and system administrators. ",
         
        },
        
      ];
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
 



     </div>    
    </>
  );
}

export default HeroCardDetail;