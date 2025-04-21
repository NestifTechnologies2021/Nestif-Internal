import {CardOverImgCardItems} from "./CardOverImgCardItems";
import "./CardOverImgCard.css";
function CardOverImgCard() {
    return (
   <><div className="flex  CardOverImgCard-Cont Home-Container">
     {CardOverImgCardItems.map((cards)=>
        {
            return(
                <li  className="CardOverImgCard-cards " key={cards.id} >
                <div className="CardOverImgCard">
                <h6>{cards.subheading}</h6>
                     <h2>{cards.heading}</h2>
                     <p>{cards.text}</p>
                </div>
                </li>
            )
        })}
   </div>
   </>
    );
  }
  export default CardOverImgCard;
  