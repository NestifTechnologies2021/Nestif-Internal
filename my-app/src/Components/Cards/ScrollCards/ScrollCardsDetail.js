import { ScrollCardsItems } from "./ScrollCardsItems";
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
class ScrollCardsDetails extends Component {
  render() {
    return (
      <>
      
        {ScrollCardsItems.map((cards) => {
          return (
            <li key={cards.id} className="cards-container flex" >
              <div className="cards">
                <div>
                  <h4>{cards.heading}</h4>
                  <img src={cards.img} alt="..." />
                </div>
                <div className="cards-desc">
                  <p>{cards.text}</p>
                  <a href={cards.url}>
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
}
export default ScrollCardsDetails;
