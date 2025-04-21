import { ContactItems } from "./ContactItems";
import "./ContactDetail.css";

const ContactDetail = () => {
  return (
    <div className="ContactDetail">
      <ul>
        {ContactItems.map((contact, index) => {
          return (
            <li key={index} className="Contact-link">
              {contact.title}
              {contact.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactDetail;
