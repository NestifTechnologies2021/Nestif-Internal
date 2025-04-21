
import "./ImageGallery.css";
import ImageGalleryItems from "./ImageGalleryItems";
import { GalleryCardItems } from "./GalleryCardItems";
function ImageGallery() {
  return (
   <>
 <div className="Main-Cont">
 <div className="Container">
   {ImageGalleryItems.map((gallery)=>
 {
  return(
    <li key={gallery.id} className="items"><img src={gallery.img} alt="..."/></li>
  )
 })}
   </div>

 </div>

   </> 
  );
}

export default ImageGallery;