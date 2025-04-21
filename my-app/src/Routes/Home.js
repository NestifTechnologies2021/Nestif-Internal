import Button from "../Components/Contacts/Button";
import Footer from "../Components/Footer/Footer";
import ScrollCards from "../Components/Cards/ScrollCards/ScrollCards";
import HomeContents from "../Components/Home/HomeContents";
import Tiles from "../Components/Cards/Tiles/Tiles";
import Navbar from "../Components//Navbar/Navbar";
import Slides from "../Components/Home/Slides";
import SocialMedia from "../Components/Home/SocialMedia";
import CardOverImg from "../Components/Cards/CardOverImg/CardOverImg";



function Home() {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <Slides />
      <Tiles />
      <CardOverImg/>
      <ScrollCards />
      <Button />
      <Footer />
    </>
  );
}
export default Home;
