import { ContactsContactItems } from "./ContactsContactItems";
import "./ContactsContact.css";
const ContactDetail = () => {
  return (
    <div>
      <ul>
        {ContactsContactItems.map((contact, index) => {
          return (
            <div>
            <li key={index} className="Contacts-Contact-link">
            <div className="address addressContact">
            <h4>{contact.address}</h4>
              <p>{contact.name}</p>
                <p>{contact.add1}</p>
                <p>{contact.add2}</p>
            </div>
             
            </li>
            </div>

          );
        })}
      </ul>
    </div>
  );
};
export default ContactDetail;
