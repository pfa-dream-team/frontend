import React from 'react';
import "../Cv-Details.css"
import { BsFillEnvelopeFill} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt,FaLinkedin,FaFacebook } from "react-icons/fa";


function Contact() {
  return (
    
   <>
          <div className="information row">
                <div className="col-md-12">
                   <div className="title">
                    <h3>Contact</h3>
                   </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <BsFillEnvelopeFill/>
                  </div>
                  <div className="description">
                     <p>benfarhatamani@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <MdLocationOn/>
                  </div>
                  <div className="description">
                     <p>Rue Dawha,ben arous, 2097</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <FaPhoneAlt/>
                  </div>
                  <div className="description">
                     <p>(+216) 23 884 306</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <FaLinkedin/>
                  </div>
                  <div className="description">
                     <p>https://www.linkedin.com/in/amani-bf/</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <FaFacebook/>
                  </div>
                  <div className="description">
                     <p>https://www.facebook.com/amani.bf/</p>
                  </div>
                </div>
          </div>
   </>
  );
}

export default Contact;
