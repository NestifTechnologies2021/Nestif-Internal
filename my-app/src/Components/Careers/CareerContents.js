import "./CareerContents.css";
import img from "../../assets (1)/career-Icon.jpg";
import CareerContentsDetails from "./CareerContentsDetails";
function CareerDetail() {
  return (
    <div className="career-container">
      <div className="career flex">
        <div className="careerContents">
          <h1> Why Nestif? </h1>
          <CareerContentsDetails />
        </div>
        <div className="careerimg">
          <img src={img} alt="careerimg" />
        </div>
      </div>
    </div>
  );
}
export default CareerDetail;
