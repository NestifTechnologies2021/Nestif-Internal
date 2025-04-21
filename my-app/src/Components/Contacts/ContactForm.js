import React, {useState} from 'react';
import "./ContactForm.css";

function ContactForm() {
  const [userData, setUserData] = useState({
    fullname: "",
          phone: "",
          email: "",
          message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const {fullname,   email, phone, message } = userData;

  if(fullname &&  email && phone && message)
  {
    
      const response = fetch(
        "https://reactdatabase-2e7fc-default-rtdb.firebaseio.com//userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           fullname,
           email,
           phone,
           message,
          }),
        }
      );
    
      if (response){
        setUserData(
          {
            fullname: "",
            phone: "",
            email: "",
            message: "", 
          }
        )
        alert("Submitted");
      }}
      else{
        alert("data required")
      }
      }
  return (
 
    <div className="form-container">
      <h1>Contact Our Team</h1>
      <form method='POST'>
        <input placeholder="Enter your name" name="fullname" value={userData.fullname} onChange={postUserData}/>
        <input placeholder="Enter your Email" required name="email" value={userData.email} onChange={postUserData}/>
        <input placeholder="Phone no." name="phone" value={userData.phone} onChange={postUserData}/>
        <textarea placeholder="How can we help you?" rows="2"  name="message" value={userData.message} onChange={postUserData}></textarea>
        <button onClick={submitData} >Submit</button>
      </form>
    </div>
  );
}
export default ContactForm;
