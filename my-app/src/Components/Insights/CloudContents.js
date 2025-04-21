import Image from "../../assets (1)/arrows-2899888_960_720.jpg";
import "./Insights.css"
import "../Cards/TextBesideImg/TextBesideImage.css"
import { CloudItems } from "./InsightsContentsItems";
function CloudContents() {
return(
    <>
{CloudItems.map((items)=>
{return(
    <li key={items.id} >
   <div className="flex TextBesideImage container">
   <div className="TextBesideImage-desc">
       
        <p>{items.text}</p>
    </div>
    <div className="insightsBorder"></div>
    <div className="TextBesideImage-desc">
        <h1>{items.headingtext}</h1>
    </div>
    </div>
    </li>
)}
)}
</>
)}

export default CloudContents;
