import Image from "../../../assets (1)/arrows-2899888_960_720.jpg";
import TextBesideImageContents from "./TextBesideImageContents";
import "./TextBesideImage.css"
function TextBesideImage() {
return(
    <>
{TextBesideImageContents.map((items)=>
{return(
    <li key={items.id} >
   <div className="flex TextBesideImage container">
    <div className="TextBesideImage-img insightImg"><img src={Image} alt="..." /></div>
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

export default TextBesideImage;
