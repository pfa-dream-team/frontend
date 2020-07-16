import React from 'react';
import "../Cv-Details.css"
import { MdSchool } from "react-icons/md";




function Skills({skills}) {
  return (
    
   <>
          <div className="information row">
                <div className="col-lg-12">
                   <div className="title">
                    <h3>Compétences</h3>
                   </div>
                </div>
                <div className="col-lg-12">
                  <div className="study row">
                  {skills.map(skill => (
                     <div className="col-md-1 skill">
                       {skill}
                     </div>
                     ))}
                  </div>
                </div>
           </div>
   </>
  );
}

export default Skills;
