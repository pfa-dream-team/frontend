import React from 'react';
import "./Cv-Details.css"
import { BsFillEnvelopeFill} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt,FaLinkedin,FaFacebook } from "react-icons/fa";


function CvDetails() {
  return (
    
   <>
     <div className="cv-detailed col-md-12" >
        <div className="cv-header">
          <h3>Amani ben farhat</h3>
          <p>Éléve ingénieur en informatique et multimedia</p>
          <span className="break"></span>
          <div className="information row">
                <div className="col-md-12">
                   <div className="title">
                    <p>contact</p>
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
        </div>
        <div className="cv-content"></div>
        <div className="cv-footer"></div>   
    
     </div>
   </>
  );
}

export default CvDetails;
