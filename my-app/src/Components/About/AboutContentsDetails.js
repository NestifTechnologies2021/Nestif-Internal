import AboutContentsItems from "./AboutContentsItems";
import { Component } from "react";

import "./AboutContents.css";
class AboutContentsDetails extends Component {
  render() {
    return (
      <>
      <div>
      <ImQuotesRight/> 
        {AboutContentsItems.map((items, index) => {
          return (
            <p className=" Home-Container aboutDesc" key={index}> {items.text}</p>
          );
        })}
        <ImQuotesRight/> 
      </div>
        
      </>
    );
  }
}
export default AboutContentsDetails;
