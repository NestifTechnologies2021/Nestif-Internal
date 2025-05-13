import { AiFillCaretRight } from "react-icons/ai";
import "./HeroCard.css";

function HeroCardDetail() {
    const HeroCardItemsRow1 = [
        {
     id:1,
     heading: "HTML",
     paragraph: "Refers to all stages involved in bringing a product from concept or idea through market release and beyond.It is the development of the fundamental software that provides a platform for application development.",
         
        },
        {
          id:2,
          heading: "CSS",
          paragraph: "The combination of two words - Software Development, and  Operations. This allows a single team to handle the entire application. It reduces the disconnection between software developers, quality assurance (QA) engineers, and system administrators. ",
         
        },
        {
          id:3,
          heading: "REACT.JS",
          paragraph: "Empowers the team members and the organization people to work with full freedom. They are free to work when, where, and how they want to. Agile working is extremely beneficial when it comes to either process management or project management.",
        
        }
      ]
     const HeroCardItemsRow2 = [
    
        {
       
          heading: "ANGULAR",
          paragraph: "Concerned with the principles and practice of product and service quality assurance and control. In software development, it is the management, development, operation and maintenance of IT systems and enterprise architectures with a high quality standard. ",
        
        },
        {
        
          heading: "NODE.JS",
          paragraph: "Refers to the physical objects (or groups of such objects) with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks. ",
        },
        {
    
          heading: "VUE.JS",
          paragraph: "Using opensource people can modify and share because its design is publicly accessible. Products include permission to use the source code, design documents, or content of the product. It is the foundation of the modern software ecosystem",
        
        }
      ]
      const HeroCardItemsRow3 = [
    
        {
       
          heading: "MVC",
          paragraph: "Concerned with the principles and practice of product and service quality assurance and control. In software development, it is the management, development, operation and maintenance of IT systems and enterprise architectures with a high quality standard. ",
        
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