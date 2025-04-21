import Image from "../../assets (1)/Artificial Intelligence.webp";
import "./Heading.css";

function AIHeading() {
  return (
    <>
      <div className="HeadingOverImg">
        {" "}
        <div className="HeadingText">
          <h1 className="heading-cont">Artificial Intelligence</h1>
          <br/>
          <h4  className="subheading-cont">As a tool , not as a threat</h4>
        </div>
        <img src={Image} alt="..." />
      </div>
    </>
  );
}
export default AIHeading;
