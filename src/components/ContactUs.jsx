import React from "react";
import './ContactUs.css'
import SpiderCanvas from "../models/SpiderCanvas";
import EarthCanvas from "../models/EarthCanvas";
import SnackBar from "../utils/Snackbar";

export default function ContactUs() {
  return (
    <div className="contact_section_container">
        
        <form className="contact-form">
          <div className="heading">
            <h2 className="glow_text">CONTACT US</h2>
            <p>feel free to reach out to us, we'd love to hear from you!</p>
          </div>
          <div className="input">
            <i className="fa-regular fa-user" />
            <input name="username" type="text" placeholder="Username" />
          </div>
          <div className="input">
            <i className="fa-regular fa-envelope" />
            <input name="email" type="email" placeholder="Email" />
          </div>
          <div className="input">
            <i className="fa-regular fa-message" />
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Message"
              style={{ resize: "none" }}
              defaultValue={""}
            />
          </div>
          <button className="button" type="button" defaultValue="Submit" onClick={()=>{
            SnackBar("Response Recorded!")
          }}>Submit</button>
        </form>
      <div className="earth_wrapper">
        
        <EarthCanvas/>
      </div>
    </div>
  );
}
