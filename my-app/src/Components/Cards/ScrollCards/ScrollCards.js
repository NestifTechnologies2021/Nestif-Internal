import "./ScrollCards.css";
import ScrollCardsDetails from "./ScrollCardsDetail";
function ScrollCards() {
  return (
    <div className="Home-Container">
      <h2>Discover the difference with us</h2>
      <hr className="underline" />
      <div className="flex HomeCard">
        <ScrollCardsDetails />
      </div>
    </div>
  );
}
export default ScrollCards;
