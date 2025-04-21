import OurBeliefItems from "./OurBeliefItems";
import { Component } from "react";
import "./AboutContents.css";
class OurBeliefDetails extends Component {
  render() {
    return (
      <>
        {OurBeliefItems.map((items, index) => {
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
export default OurBeliefDetails;
