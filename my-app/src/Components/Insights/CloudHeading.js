import Image from "../../assets (1)/cloud.jpg";
import "./Heading.css";

function CloudHeading() {
  return (
    <>
      <div className="HeadingOverImg">
        {" "}
        <div className="HeadingText">
          <h1 className="heading-cont">Cloud</h1>
          <br/>
          <em><h4  className="subheading-cont">Anytime / Anywhere access to data</h4></em>
        </div>
        <img src={Image} alt="..." />
      </div>
    </>
  );
}
export default CloudHeading;
