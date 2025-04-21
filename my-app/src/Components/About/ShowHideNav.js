import { Tabs, Tab } from "react-bootstrap";
import {FaArrowRight} from "react-icons/fa"
import Image1 from "../../assets (1)/asset 1.jpeg";
import ImageCommitment from "../../assets (1)/commitment.jpg";
import ImageRoadmap from "../../assets (1)/Road Map.jpeg";
import ImageContext from "../../assets (1)/Context.jpeg";
import ImageBelief from "../../assets (1)/Belief.jpeg";
import ImageStory from "../../assets (1)/OurStory.jpeg";
import { OurCommitment } from "./ShowHideNavItems";
import { OurRoadmap } from "./ShowHideNavItems";
import { OurContext } from "./ShowHideNavItems";
import { OurBeliefs } from "./ShowHideNavItems";
import { OurStories } from "./ShowHideNavItems";
import React from "react";
import { Link } from "react-router-dom";
import "./ShowHideNav.css";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;
function ShowHideNav() {
  // const ref = useRef(null);
  // const scrollClick=()=>{
  //  ref.current?<OurCommitmentDetails/>:<OurCommitmentDetails/>};
  return (
   <div className="ShowHideNav">
   <Tabs
      defaultActiveKey="Our Commitment"
      id="uncontrolled-tab-example "
      className="mb-3 title "
    >
      <Tab eventKey="Our Commitment" title="Our Commitment">
      
        {OurCommitment.map((items)=>
        {return(
          <li key={items.id}>
          <div className="tab-cont Home-Container flex">
          <div className="tabImg">
            {" "}
            <img src={ImageCommitment} alt="..." />
          </div>
          <div className="tabDesc">
            <h1>{items.heading}</h1>
            <p>{items.desc}</p>
            <Link to="/whoweare">Learn More <FaArrowRight /></Link>
          </div>
        </div>
          </li>
        )}
        )}
      </Tab>
      <Tab eventKey="Our Road-map" title="Road-map">
     
        {OurRoadmap.map((items)=>
        {return(
          <li key={items.id}>
          <div className="tab-cont Home-Container flex">
          <div className="tabImg">
            {" "}
            <img src={ImageRoadmap} alt="..." />
          </div>
          <div className="tabDesc">
            <h1>{items.heading}</h1>
            <p>{items.desc}</p>
            <Link to="/whoweare">Learn More <FaArrowRight /></Link>
          </div>
        </div>
          </li>
        )}
        )}
      </Tab>
      <Tab eventKey="Our Context" title="Context">
      
        {OurContext.map((items)=>
        {return(
          <li key={items.id}>
          <div className="tab-cont Home-Container flex">
          <div className="tabImg">
            {" "}
            <img src={ImageContext} alt="..." />
          </div>
          <div className="tabDesc">
            <h1>{items.heading}</h1>
            <p>{items.desc}</p>
            <Link to="/whoweare">Learn More <FaArrowRight /></Link>
          </div>
        </div>
          </li>
        )}
        )}
      </Tab>
      <Tab eventKey="Our Beliefs" title="Our Belief">
      
        {OurBeliefs.map((items)=>
        {return(
          <li key={items.id}>
          <div className="tab-cont Home-Container flex">
          <div className="tabImg">
            {" "}
            <img src={ImageBelief} alt="..." />
          </div>
          <div className="tabDesc">
            <h1>{items.heading}</h1>
            <p>{items.desc}</p>
            <Link to="/whoweare">Learn More <FaArrowRight /></Link>
          </div>
        </div>
          </li>
        )}
        )}
      </Tab>
      <Tab eventKey="Our Stories" title="Our Story">
      
        {OurStories.map((items)=>
        {return(
          <li key={items.id}>
          <div className="tab-cont Home-Container flex">
          <div className="tabImg">
            {" "}
            <img src={ImageStory} alt="..." />
          </div>
          <div className="tabDesc">
            <h1>{items.heading}</h1>
            <p>{items.desc}</p>
            <Link to="/whoweare">Learn More <FaArrowRight /></Link>
          </div>
        </div>
          </li>
        )}
        )}
      </Tab>
    </Tabs>
    </div>
  );
}

export default ShowHideNav;
