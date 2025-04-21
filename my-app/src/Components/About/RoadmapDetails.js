import RoadmapItems from "./RoadmapItems";
import { Component } from "react";
import "./AboutContents.css";
class RoadmapDetails extends Component {
  render() {
    return (
      <>
        {RoadmapItems.map((items, index) => {
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
export default RoadmapDetails;
