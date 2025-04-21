import Image from "../../assets (1)/health.jpg";
import { HealthItems} from './IndustriesContentItems';
import "../Cards/TextBesideImg/TextBesideImage.css"
function HealthContents() {
return(
    <>
{HealthItems.map((items)=>
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

export default HealthContents;
