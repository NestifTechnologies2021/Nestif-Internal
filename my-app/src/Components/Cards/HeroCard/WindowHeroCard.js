import { AiFillCaretRight } from "react-icons/ai";
import "./HeroCard.css";

function HeroCardDetail() {
    const HeroCardItemsRow1 = [
        {
     id:1,
     heading: "MICROSOFT WPF",
     paragraph: "Refers to all stages involved in bringing a product from concept or idea through market release and beyond.It is the development of the fundamental software that provides a platform for application development.",
         
        },
        {
          id:2,
          heading: "MICROSOFT WINFORMS",
          paragraph: "The combination of two words - Software Development, and  Operations. This allows a single team to handle the entire application. It reduces the disconnection between software developers, quality assurance (QA) engineers, and system administrators. ",
         
        },
        {
          id:3,
          heading: ".NET MAUI",
          paragraph: "Empowers the team members and the organization people to work with full freedom. They are free to work when, where, and how they want to. Agile working is extremely beneficial when it comes to either process management or project management.",
        
        }
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