import React from "react";
import './ContactUs.css'
import SpiderCanvas from "./Spider/SpiderCanvas";

export default function ContactUs() {
  return (
    <div className="contact_section_container">
      <div className="contact-container">
        
        <form className="contact-form">
          <div className="heading">
            <h2>CONTACT US</h2>
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
          <button className="button" type="button" defaultValue="Submit" onClick={()=>{}}>Submit</button>
        </form>
      </div>
      <SpiderCanvas/>
    </div>
  );
}
