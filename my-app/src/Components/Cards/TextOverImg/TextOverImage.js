
import Image from "../../../assets (1)/Marketing.jpg";
import "./TextOverImage.css";
import TextOverImageContents from "./TextOverImageContents";
function TextOverImage() {

    return (
              <>
              {TextOverImageContents.map((items) =>
            {  
                return (
                    <li key={items.id} >
        <div className="TextOverImg">  <div className="ImgText"><h1 className="text-cont" >{items.text}</h1></div>
          <img src={Image} alt="..." /></div>
        </li>
        
    
              );
              })}
          
      
      </>
    );

}
export default TextOverImage;
