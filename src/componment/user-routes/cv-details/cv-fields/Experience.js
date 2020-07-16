import React from 'react';
import "../Cv-Details.css"
import { MdWork } from "react-icons/md";




function Experience({experience}) {
  return (
    
   <>
          <div className="information row">
                <div className="col-lg-12">
                   <div className="title">
                    <h3>Experience</h3>
                   </div>
                </div>
                {experience.map(exp => (    
                  <>
                   <div className="col-lg-12">
                    <div className="study">
                      <p><MdWork/> &nbsp; {exp.position}</p>
                       <ul>
                         <li>
                            Prériode : {exp.start} - {exp.end}
                         </li>
                         <li className="agency-name">
                             Société : {exp.agency}
                         </li>
                         <li className="work-description">
                         Description du poste : {exp.description}
                         </li>
                     </ul>
                  </div>
                </div>
                  
                  </>
                 ))}
               
                </div>
   </>
  );
}

export default Experience;
