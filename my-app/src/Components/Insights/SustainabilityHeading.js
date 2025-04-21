import Image from "../../assets (1)/sustainability.webp";
import "./Heading.css";

function SustainibiltyHeading() {
  return (
    <>
      <div className="HeadingOverImg">
        {" "}
        <div className="HeadingText">
          <h1 className="heading-cont">Sustainibilty</h1>
          <br/>
          <h4  className="subheading-cont">Is here to stay or we may not be</h4>
        </div>
        <img src={Image} alt="..." />
      </div>
    </>
  );
}
export default SustainibiltyHeading;
