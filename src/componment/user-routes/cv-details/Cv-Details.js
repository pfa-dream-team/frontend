import React from 'react';
import "./Cv-Details.css"
import Contact from "./cv-fields/Contact"
import Education from "./cv-fields/Education"
import Experience from "./cv-fields/Experience"
import Skills from "./cv-fields/Skills"




function CvDetails({user,cv}) {
  return (
    
   <>
     <div className="cv-detailed col-md-12" >
        <div className="cv-header">
            <h3>{user.name}  {user.last_name}</h3>
            <p>{cv.position}</p>
          <span className="break"></span>
        </div>
        <div className="cv-content">
       
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
