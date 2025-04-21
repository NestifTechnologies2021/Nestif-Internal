import "./RequestQuoteForm.css";
import {FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

import countrydata from "../../countrydata.json";
function RequestQuoteForm() {
  const [popupForm, setpopupForm]=useState(false);
  function closeModel(){
    useEffect(()=>{
    document.body.style.overflowY="hidden";
    return()=>{document.body.style.overflowY="scroll";};
  }
  ,[]);}
  function handleClick(){
    setpopupForm(true)
  }
  const[value , setValue]=useState("");

  function handleSelect(event)
  {
    setValue(event.target.value)
  }

  return (
    <div>
    <button className="QuoteButton"  onClick={() => {
          handleClick();
        }}> Request A quote</button>
     {popupForm && (
      
    <div className="QuoteForm1" >
   
      <form className="QuoteForm">
      <h5>Sales & Quote Form <FaTimes className="close-icon" onClick={() => setpopupForm(!popupForm)}/></h5>
      <p> * Required Field </p>
        <input placeholder="Name *" required  />
        <br/>
        <input placeholder="Email(Business) *" required  />
        <br/>
        <input placeholder="Company *" required />
        <br/>
        <input placeholder="Phone *" required/>
        <br/>
        <select  onChange={handleSelect}  >
        <option value="" required selected className="form-select">Country / Region *</option>
         {
          countrydata.map((getcountry,index)=>(
            <option value={getcountry.country} key={getcountry.index} id="countries">{getcountry.country}</option>
          ))
        }
        </select>
        <br/>
        <input placeholder="Category of Interest *" required />
        <br/>
        <input placeholder="Products & Services "  />
        <br/>
        <textarea placeholder="Message (Please fill in the details of your request) *" required rows="2"></textarea>
        <br/>
        <label for="myfile">Attachment:</label>
        <input type="file" id="myfile" name="myfile"/>
        <p>By clicking on "Submit", I agree to the <a href="#">Privacy Policy</a>.</p>
        <button >Submit</button>
      </form>
    </div>
      )
      }
   
    </div>
  );
}
export default RequestQuoteForm;