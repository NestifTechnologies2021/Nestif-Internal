import HomeContentsItems from "./HomeContentsItems";

import "./HomeContents.css";
function HomeContents() {
  
    return (
      <>
      <div className="Home-Container"> 
        {HomeContentsItems.map((items) => {
          return (
            <li key={items.id}>
            <p  className="contents" >
              {items.text}
            </p>
            </li>
          );
        })}
        </div>
      </>
    );
  }

export default HomeContents;
