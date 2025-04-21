import ContextItems from "./ContextItems";
import { Component } from "react";
import "./AboutContents.css";
class ContextDetails extends Component {
  render() {
    return (
      <>
        {ContextItems.map((items, index) => {
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
export default ContextDetails;
