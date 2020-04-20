import React from "react";

import "../assets/styles/Contact.css";
import TextField from "../components/widgets/TextField";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        {/* <img
          src="https://images.squarespace-cdn.com/content/v1/5515a1f7e4b07674243b2e6a/1559068369012-B24R1V8RXIAFL3EC8DB8/ke17ZwdGBToddI8pDm48kJr0asIjuuEyp3VmsQQ377B7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeTJ6X5EoHDTakXjJOnbhYg3EBWqNrSq87UZcqhDfoGYVzIgDbKuWbU6v7VINLj_HA/RGROUP.jpg"
          alt=""
        /> */}
        <div className="contact-us">
          <h4 className="contact-title">Contact Us</h4>

          <div className="name">
            <p className="top-label">Name *</p>
            <div className="name-row">
              <TextField label="First Name" id="fName" />
              <TextField label="Last Name" id="lName" />
            </div>
          </div>

          <TextField label="Email Address *" id="email" type="email" />
          <TextField label="Company Name" id="cName" />
          <TextField label="Message *" type="msg" id="msg" />

          <input className="contact-cta" type="submit" value="Submit" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.6080157002636!2d88.41260566606208!3d26.78493096735557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ3JzA2LjAiTiA4OMKwMjQnNDYuMCJF!5e0!3m2!1sen!2sin!4v1587369046719!5m2!1sen!2sin"
            frameBorder="0"
            title="Company Location"
            // width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
