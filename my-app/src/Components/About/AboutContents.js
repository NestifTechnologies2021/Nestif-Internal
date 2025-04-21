
import AboutHeroSection from "./AboutHeroSection";


import ShowHideNav from "./ShowHideNav";
function AboutContents() {
  return (
    <div className="About-Container">
      <h1>About Us</h1>
    
      <div className="ShowHideNav-cont"><ShowHideNav />
      <AboutHeroSection/>
      </div>
    

    </div>
  );
}
export default AboutContents;
