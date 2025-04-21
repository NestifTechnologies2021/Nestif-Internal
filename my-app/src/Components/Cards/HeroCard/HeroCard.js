import HeroCardDetail from "./HeroCardDetail";
function HeroCard() {
  return (
    <div className="HeroCardContainer">
      <h2>Product Engineering</h2>
      <hr className="underline" />
      <div className="flex heroCard">
        <HeroCardDetail />
      </div>
    </div>
  );
}
export default HeroCard;
