import OurCommitmentItems from "./OurCommitmentItems";
import { Component } from "react";
import "./AboutContents.css";
class OurCommitmentDetails extends Component {
  render() {
    return (
      <>
        {OurCommitmentItems.map((items, index) => {
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
export default OurCommitmentDetails;
