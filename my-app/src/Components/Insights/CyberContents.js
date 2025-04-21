
import "./Insights.css"
import "../Cards/TextBesideImg/TextBesideImage.css"
import { CyberItems } from "./InsightsContentsItems";
function CyberContents() {
return(
    <>
{CyberItems.map((items)=>
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

export default CyberContents;
