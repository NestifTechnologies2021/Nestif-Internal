import GallerySection from "../Components/About/ImageGallery/GallerySection";
import WhoWeAreContents from "../Components/WhoWeAre/WhoWeAreContents";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
function WhoWeAre() {
  return (
    <div>
      <Navbar />
      <WhoWeAreContents />
      <GallerySection />
      <Footer />
    </div>
  );
}
export default WhoWeAre;
