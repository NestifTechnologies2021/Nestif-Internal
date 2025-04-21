import "./Button.css";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
const Button = () => {
  return (
    <ul>
      {" "}
      <Link to="/contacts" className="button">
        Contact
      </Link>
      <Link to="/contacts" className="button-icon">
        <AiFillPhone />
      </Link>
    </ul>
  );
};

export default Button;
