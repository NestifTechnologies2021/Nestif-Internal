import { Carousel } from "react-bootstrap";
import img1 from "../../assets (1)/Image1.jpg";
import img2 from "../../assets (1)/asset 3.jpeg";
import img3 from "../../assets (1)/Image4.jpg";
import img4 from "../../assets (1)/asset 4.jpeg";
import "./Slides.css";
function Slides() {
  return (
    <Carousel >
      <Carousel.Item interval={2000}>
        <img className=" d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
