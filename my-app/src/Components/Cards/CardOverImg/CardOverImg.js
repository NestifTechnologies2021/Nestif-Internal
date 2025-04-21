import CardOverImgCard from "./CardOverImgCard";
import asset from "../../../assets (1)/NestifTeam.jpg";
import "./CardOverImg.css";
function CardOverImg() {
  return (
    <div  className=" CardOverImg">
    <div className="CardOverImg-Img Home-Container"><img src={asset} alt="..."/></div>
    <div className="CardOverImg-cards"><CardOverImgCard/>
    </div>
       
       </div>
   
   
  );
}
export default CardOverImg;
