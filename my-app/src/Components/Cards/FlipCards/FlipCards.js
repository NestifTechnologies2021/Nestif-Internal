import "./FlipCards.css";
import FlipCardsDetails from "./FlipCardsDetail";
function FlipCards() {
  return (
    <div className="Flip-card-container">
      <h2>Lorem Ipsum</h2>
      <hr className="underline" />
      <div className="flex HomeCard">
        <FlipCardsDetails />
      </div>
    </div>
  );
}
export default FlipCards;
