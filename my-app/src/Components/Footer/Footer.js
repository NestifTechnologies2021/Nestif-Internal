import "./Footer.css";
import Copyright from "./Copyright";

import ContactDetail from "./ContactDetail";
const Footer = () => {
  return (
    <footer>
      <div className="Footer-container Home-Container flex">
        <div className="contact">
          <ContactDetail />
        </div>
        <div className="links flex">
          <div>
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/media">Media</a>
            <a href="/contacts">Contact</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="/softwareconsulting">Software Consulting</a>
            <a href="/workforcemanagement">Workforce Management</a>
            <a href="/productEngg">Product Engineering</a>
            <a href="/skilldevelopment">Skill Development</a>
          {/* <a href="/Internship">Internships & Trainings</a>  additionally added */}
          </div>
          <div>
            <h4>Insights</h4>
            <a href="/artificialintelligence">Artificial Integration</a>
            <a href="/cloud">Cloud</a>
            <a href="/cybersecurity">Cyber Security</a>
            <a href="/digitaltransformation">Digital Transformation</a>
          </div>
          <div>
            <h4>Industries</h4>
            <a href="/aviation">Aviation</a>
            <a href="/education">Education</a>
            <a href="/healthcare">Healthcare</a>
            <a href="/insurance">Insurance</a>
          </div>
        </div>
      </div>
      <hr />
      <Copyright />
    </footer>
  );
};
export default Footer;
