import React,{useState} from "react";
import Navbar from "../../Components/navbar/navbar";
import Footer from "../../Components/footer/footer";
import "./contact.css";

function Contact() {
  return (
    <div className="contact_return_div">
      <Navbar />
      <div class="contact_banner_div">
        <p className="contact_banner_p">Contact Us</p>
      </div>
      <div className="contact-form">
        <p className="contact-form-p">How Can We Help You ?</p>
        <input className="input-text-1" type="Name" name="Name" id="Name" placeholder="Name"/>
        <input className="input-text-2" type="email" name="email" id="email" placeholder="Email"/>
        <input className="input-text-3" type="phone" name="Name" id="Name" placeholder="Phone No"/>
        <input className="input-text-4" type="subject" name="Name" id="Name" placeholder="Subject"/>
        <input className="input-text-5" type="message" name="Name" id="Name" placeholder="Message"/>
      </div>
      <button className="contact_button">Submit Your Response</button>

      <Footer />
    </div>
  );
}

export default Contact;
