import Image from "../../assets (1)/DigitalTransformationInsights.jpeg";
import "./Insights.css"
import "../Cards/TextBesideImg/TextBesideImage.css"
import { DigitalItems } from "./InsightsContentsItems";
function DigitalContents() {
return(
    <>
{DigitalItems.map((items)=>
{return(
    <li key={items.id} >
   <div className="flex TextBesideImage">
   <div className="TextBesideImage-desc">
        <p>{items.text}</p>
        <p>{items.text2}</p>
        <p>{items.text3}</p>
    </div>
    <div className="insightsBorder"></div>
    <div className=" insightImg" ><img src={Image} alt="..." /></div>
    </div>
    </li>
)}
)}
</>
)}

export default DigitalContents;
