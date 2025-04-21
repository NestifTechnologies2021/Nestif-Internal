import Image from "../../assets (1)/security.jpeg";
import "./Heading.css";

function CyberSecurityHeading() {
  return (
    <>
      <div className="HeadingOverImg">
        {" "}
        <div className="HeadingText">
          <h1 className="heading-cont">Cyber Security</h1>
          <br/>
          <h4  className="subheading-cont">That no one else can break</h4>
        </div>
        <img src={Image} alt="..." />
      </div>
    </>
  );
}
export default CyberSecurityHeading;
