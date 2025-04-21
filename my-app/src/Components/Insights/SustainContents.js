import Image from "../../assets (1)/sustainability1.jpg";
import "./Insights.css"
import "../Cards/TextBesideImg/TextBesideImage.css"
import { SustainibiltyItems } from "./InsightsContentsItems";
function SustainContents() {
return(
    <>
{SustainibiltyItems.map((items)=>
{return(
    <li key={items.id} >
   <div className="flex TextBesideImage">
   <div className="TextBesideImage-desc">
        <p>{items.text}</p>
    </div>
    <div className="insightsBorder"></div>
    <div className=" insightImg" ><img src={Image} alt="..." /></div>
    </div>
    </li>
)}
)}
</>
)}

export default SustainContents;
