import Image from "../../assets (1)/DigitalTransform.webp";
import "./Heading.css";

function DigitalTransHeading() {
  return (
    <>
      <div className="HeadingOverImg">
        {" "}
        <div className="HeadingText">
          <h1 className="heading-cont">Digital Transformation</h1>
          <br/>
          <h4  className="subheading-cont">Changing the way we think</h4>
        </div>
        <img src={Image} alt="..." />
      </div>
    </>
  );
}
export default DigitalTransHeading;
