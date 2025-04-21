import TextBesideImage from "../Components/Cards/TextBesideImg/TextBesideImage";
import TextImgText from "../Components/Cards/TextImgText/TextImgText";
import TextOverImage from "../Components/Cards/TextOverImg/TextOverImage";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
function Marketing() {
    return (
      <div>
      <Navbar/>
      <div className="Home-Container">
      <TextOverImage/>
      <TextBesideImage/>
      <TextImgText/></div>
      <Footer/>
      </div> 
    );
  }
  export default Marketing;
  