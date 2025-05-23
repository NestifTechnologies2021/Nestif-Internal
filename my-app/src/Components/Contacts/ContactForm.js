// import React, {useState} from 'react';
// import "./ContactForm.css";

// function ContactForm() {
//   const [userData, setUserData] = useState({
//     fullname: "",
//           phone: "",
//           email: "",
//           message: "",
//   });

//   let name, value;
//   const postUserData = (event) => {
//     name = event.target.name;
//     value = event.target.value;

//     setUserData({ ...userData, [name]: value });
//   };

//   // connect with firebase
//   const submitData = async (event) => {
//     event.preventDefault();
//     const {fullname,   email, phone, message } = userData;

//   if(fullname &&  email && phone && message)
//   {
    
//       const response = fetch(
//         "https://reactdatabase-2e7fc-default-rtdb.firebaseio.com//userDataRecords.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//            fullname,
//            email,
//            phone,
//            message,
//           }),
//         }
//       );
    
//       if (response){
//         setUserData(
//           {
//             fullname: "",
//             phone: "",
//             email: "",
//             message: "", 
//           }
//         )
//         alert("Submitted");
//       }}
//       else{
//         alert("data required")
//       }
//       }
//   return (
 
//     <div className="form-container">
//       <h1>Contact Our Team</h1>
//       <form method='POST'>
//         <input placeholder="Enter your name" name="fullname" value={userData.fullname} onChange={postUserData}/>
//         <input placeholder="Enter your Email" required name="email" value={userData.email} onChange={postUserData}/>
//         <input placeholder="Phone no." name="phone" value={userData.phone} onChange={postUserData}/>
//         <textarea placeholder="How can we help you?" rows="2"  name="message" value={userData.message} onChange={postUserData}></textarea>
//         <button onClick={submitData} >Submit</button>
//       </form>
//     </div>
//   );
// }
// export default ContactForm;

import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; //Taijasi
import { Store, ReactNotifications } from 'react-notifications-component'; //Taijasi
import 'react-notifications-component/dist/theme.css'; //Taijasi
import "./ContactForm.css";

function ContactForm() { 
  const [userData, setUserData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fullname, email, phone, message } = userData;

    if (fullname && email && phone && message) {
      // using Email.js here
      emailjs.send('service_34aqhb8', 'template_muznps1', {
        from_name: fullname,
        from_email: email,
        phone: phone,
        message: message,
      }, 'PI41P_Ie_zSL2gr01')
      .then((result) => {
        console.log(result.text);
        // Show success notification
        Store.addNotification({
          title: "Success!",
          message: "Email sent successfully!",
          type: "success", 
          container: "top-left", // where to position the notification
          animation: "fade-in", 
          dismiss: {
            duration: 3000, // Duration in milliseconds
            onScreen: true
          }
        });
      }, (error) => {
        console.log(error.text);
        // Shows the error notification
        Store.addNotification({
          title: "Error!",
          message: "Failed to send email. Please try again.",
          type: "danger", 
          container: "top-left", // where to position the notification
          dismiss: {
            duration: 3000, // Duration in milliseconds
            onScreen: true
          }
        });
      });

      // Reset user data after submission
      setUserData({
        fullname: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className="form-container">
      <ReactNotifications />
      <h1>Contact Our Team</h1>
      <form method='POST' onSubmit={submitData}>
        <input placeholder="Enter your name" name="fullname" value={userData.fullname} onChange={postUserData} required />
        <input placeholder="Enter your Email" name="email" value={userData.email} onChange={postUserData} required />
        <input placeholder="Phone no." name="phone" value={userData.phone} maxLength={10} onChange={postUserData} required />
        <textarea placeholder="How can we help you?" rows="2" name="message" value={userData.message} maxLength={500} onChange={postUserData} required></textarea>
        <br />

        {/* File input for attachment */}
        <label htmlFor="myfile">Attachment:</label>
        <input type="file" id="myfile" name="myfile" />
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
