import { SocialMediaItems } from "./SocialMediaItems";
import "./SocialMedia.css";
import { Link } from "react-router-dom";
const SocialMedia = () => {
  return (
    <div>
      <ul className="Social-icons flex">
        {SocialMediaItems.map((social) => {
          return (
            <li key={social.id}>
              <Link
                className={`${social.cName} ${social.clName}`}
                to={social.url}
                target="_blank"
              >
                <i className={social.icon}></i>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SocialMedia;
