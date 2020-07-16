import React from 'react';
import "../Cv-Details.css"
import { MdSchool } from "react-icons/md";




function Education({education}) {
  return (
    
   <>
          <div className="information row">
                <div className="col-lg-12">
                   <div className="title">
                    <h3>Education</h3>
                   </div>
                </div>
                {education.map(edu => (
                      <>
                      <div className="col-lg-12">
                        <div className="study">
                           <p><MdSchool/> &nbsp; {edu.diploma} </p>
                            <ul>
                              <li>
                                 Période :  {edu.start} - {edu.end}
                              </li>
                              <li>
                               Nom de l'institut : {edu.institut} 
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

export default Education;
