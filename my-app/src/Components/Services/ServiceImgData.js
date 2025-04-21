import { Link } from "react-scroll";

function ServiceImgData(props) {
    return (
      <div className="s-card">
        <div className="s-image">
          <Link to="/services"><img src={props.image} alt="serviceimg" /></Link>
        </div>
        <div className="background">
          <h3 className="text">{props.text}</h3>
        </div>
      </div>
    );
  }
  export default ServiceImgData;
  