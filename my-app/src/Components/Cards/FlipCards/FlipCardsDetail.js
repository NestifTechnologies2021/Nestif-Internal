import { FlipCardsItems } from "./FlipCardsItems";

import { FaArrowRight } from "react-icons/fa";

function FlipCardsDetails()  {
    return (
      <> 
        {FlipCardsItems.map((Flipcards) => {
          return (
           <li  key={Flipcards.id} className="Flipcards-container" >
              <div  className="Flipcards">
                <div className="Flipcards-img">
                  <h4>{Flipcards.heading}</h4>
                  <img src={Flipcards.src} alt="..." />
                </div>
                <div className="Flipcards-desc">
                  <p>{Flipcards.subheading}</p>
                  <p className="Flipcards-desc-text">{Flipcards.text}</p>
                  <a href="/">
                    Learn More <FaArrowRight />
                  </a>
                </div>
                </div>
              </li>
            
           
          );
        })}
    
      </>
    );
  }

export default FlipCardsDetails;
