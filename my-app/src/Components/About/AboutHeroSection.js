import Image from "../../../src/assets (1)/business-3639565_960_720.jpg";
import logo1 from "../../../src/assets (1)/logo-white.png";
import logo2 from "../../../src/assets (1)/logo.png";
import logo3 from "../../../src/assets (1)/AL_BLUE-4.png_width=1660&name=AL_BLUE-4.png";
import logo4 from "../../../src/assets (1)/13028814.png";
import "./AboutHeroSection.css";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"
import AboutHeroSectionItems from "./AboutHeroSectionItems";
function AboutHeroSection() {
return (
<>
{AboutHeroSectionItems.map((items) => {
return (
  <li key={items.id}>
    <div className="AboutHeroSection ">
      <div className="HeroCont flex">
        <div className="HeroSecCont">
          <div className="HeroCont-desc ">
          <ImQuotesLeft style={{marginRight:"60px",color:"white"}}/>
          <p>{items.text1}</p>
          <ImQuotesRight style={{marginRight:"10px",color:"white"}}/>
          </div>
          <div className="HeroCont-Client">
            <h2>Our Client Partners</h2>
            <div className="client flex">
              <img src={logo1} alt="..." />
              <img src={logo3} alt="..." />
              <img src={logo2} alt="..." />
              <img src={logo4} alt="..." />
                
            </div>
          
          </div>
        </div>
      </div>
      <div className="HeroContImg">
        <img src={Image} alt="..." />
      </div>
    </div>
  </li>
);
})}
</>
);
}
export default AboutHeroSection;
