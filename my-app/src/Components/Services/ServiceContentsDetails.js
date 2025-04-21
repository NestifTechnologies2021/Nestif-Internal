import ServiceContentsItems from "./ServiceContentsItems";
import { Component } from "react";
class ServiceContentsDetails extends Component {
  render() {
    return (
      <>
        {ServiceContentsItems.map((items) => {
          return (
            <li  key={items.id}>
            <p className="contents Home-Container">
              {items.text}
            </p> 
            </li>
           
          );
        })}
      </>
    );
  }
}
export default ServiceContentsDetails;
