import React from 'react';
import "./Cv-Details.css"
import Contact from "./cv-fields/Contact"
import Education from "./cv-fields/Education"
import Experience from "./cv-fields/Experience"
import Skills from "./cv-fields/Skills"




function CvDetails() {
  return (
    
   <>
     <div className="cv-detailed col-md-12" >
        <div className="cv-header">
          <h3>Amani ben farhat</h3>
          <p>Éléve ingénieur en informatique et multimedia</p>
          <span className="break"></span>
        </div>
        <div className="cv-content">
        <Contact/>
        <Education/>
        <Experience/>
        </div>
        <div className="cv-footer">
         <Skills/>
        </div>  
     </div>
   </>
  );
}

export default CvDetails;
