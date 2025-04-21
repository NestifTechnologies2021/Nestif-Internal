import ContactForm from "./ContactForm";
import ContactDetail from "./ContactsContact";
import "./Contact.css";
function Contacts() {
  return (
    <div className="flex contact Home-Container">
    <div className="contactform">    <ContactForm/></div>
    <div className="contactdetail">   <ContactDetail/> </div>
 
  
    </div>
  );
}
export default Contacts;
