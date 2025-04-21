import OurStoryItems from "./OurStoryItems";
import { Component } from "react";
import "./AboutContents.css";
class OurStoryDetails extends Component {
  render() {
    return (
      <>
        {OurStoryItems.map((items, index) => {
          return (
            <p className=" Home-Container aboutDesc" key={index}>
              {items.text}
            </p>
          );
        })}
      </>
    );
  }
}
export default OurStoryDetails;
