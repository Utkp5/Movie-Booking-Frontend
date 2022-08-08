import React,{useState} from "react";
import Navbar from "../../Components/navbar/navbar";
import Footer from "../../Components/footer/footer";
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

  const [Name,setName] = useState("");
  const [email,setemail] = useState("");
  const [phone,setphone] = useState("");
  const [subject,setsubject] = useState("");
  const [message,setmessage] = useState("");


  const Handlecontact = () => {
    if (!(Name && email && phone && subject && message)) {
      toast.warning("Empty Response Can not be Submitted")
    }
    else{
      toast.success("Your Response has been Submitted Successfully")
      setName(' ');
      setemail(' ');
      setphone(' ');
      setsubject(' ');
      setmessage(' ');
    }
  }
  

  return (
    <div className="contact_return_div">
      <Navbar />
      <div class="contact_banner_div">
        <p className="contact_banner_p">Contact Us</p>
      </div>
      <div className="contact-form">
        <p className="contact-form-p">How Can We Help You ?</p>
        <input className="input-text-1" type="Name" name="Name" id="Name" placeholder="Name" value={Name} onChange={(e) => {
          setName(e.target.value);
        }}/>
        <input className="input-text-2" type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e) => {
          setemail(e.target.value);
        }}/>
        <input className="input-text-3" type="phone" name="phone" id="phone" placeholder="Phone No" value={phone} onChange={(e) => {
          setphone(e.target.value);
        }}/>
        <input className="input-text-4" type="subject" name="subject" id="subject" placeholder="Subject" value={subject} onChange={(e) => {
          setsubject(e.target.value);
        }}/>
        <input className="input-text-5" type="message" name="message" id="message" placeholder="Message" value={message} onChange={(e) => {
          setmessage(e.target.value);
        }}/>
      </div>
      <button className="contact_button" onClick={() => {
        Handlecontact();
      }}>Submit Your Response</button>

      <Footer />

      <ToastContainer />

    </div>
  );
}

export default Contact;
