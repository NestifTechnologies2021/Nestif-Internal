import { Component } from "react";
import "./Navbar.css";
import CompanyLogo from "../../assets (1)/asset 0.png";
import NavbarIcons from "./NavbarIcons";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="Navbar flex">
          <Link to="/"><img src={CompanyLogo} alt="Company logo" /></Link>
          <NavbarIcons />
        </div>
      </nav>
    );
  }
}

export default Navbar;
