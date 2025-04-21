import Image from "../../assets (1)/aviation.jpg";
import {AviationItems} from './IndustriesContentItems';
import "../Cards/TextBesideImg/TextBesideImage.css"
function AviationContents() {
return(
    <>
{AviationItems.map((items)=>
{return(
    <li key={items.id} >
   <div className="flex TextBesideImage container">
    <div className="TextBesideImage-img"><img src={Image} alt="..." /></div>
    <div className="TextBesideImage-desc">
        <h4>{items.heading}</h4>
        <p>{items.text}</p>
    </div>
    </div>
    </li>
)}
)}
</>
)}

export default AviationContents;
