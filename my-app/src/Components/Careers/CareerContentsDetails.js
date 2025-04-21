import CareerContentsItems from "./CareerContentsItems";
import { Component } from "react";
class CareerContentsDetails extends Component {
  render() {
    return (
      <>
        {CareerContentsItems.map((items, index) => {
          return (
            <p className="contents" key={index}>
              {items.text}
            </p>
          );
        })}
      </>
    );
  }
}
export default CareerContentsDetails;
