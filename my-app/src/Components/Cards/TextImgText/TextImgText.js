import Image from "../../../assets (1)/work-5382501_960_720.jpg";
import TextImgTextContents from "./TextImgTextContents";
import "./TextImgText.css"

function TextImgText() {
return(
    <>
    <h1>How We Do</h1>
{TextImgTextContents.map((items)=>
{return(
    <li key={items.id} >
   <div className="flex TextImgText">
        <div className="TextImgText-desc1">
        <h4>{items.heading1}</h4>
        <p>{items.text1}</p>
        <h4>{items.heading2}</h4>
        <p>{items.text2}</p> </div>
       
        <div className="TextImgText-img"><img src={Image} alt="..." /></div>
        <div className="TextImgText-desc2">
        <h4>{items.heading3}</h4>
        <p>{items.text3}</p>
        <h4>{items.heading4}</h4>
        <p>{items.text4}</p>      
    </div>
   
    </div>
    </li>
)}
)}
</>
)}

export default TextImgText;
