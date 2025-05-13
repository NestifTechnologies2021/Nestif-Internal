//Taijasi
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollCardsDetails from "../Components/Cards/ScrollCards/InternshipScrollCard";
import Internships from "../Components/Internship&Training/Internship";

function Internship() {
    return (
      <div >
      <Navbar/>
  <Internships/>
  <ScrollCardsDetails/>
      <Footer/>
      </div> 
    );
  }
  export default Internship;