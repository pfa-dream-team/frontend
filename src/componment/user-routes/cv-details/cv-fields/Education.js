import React from 'react';
import "../Cv-Details.css"
import { MdSchool } from "react-icons/md";




function Education() {
  return (
    
   <>
          <div className="information row">
                <div className="col-lg-12">
                   <div className="title">
                    <h3>Education</h3>
                   </div>
                </div>
                <div className="col-lg-12">
                  <div className="study">
                    <p><MdSchool/> &nbsp; NATIONAL DIPLOMA IN COMPUTER ENGINEERING</p>
                     <ul>
                         <li>
                            Période : 2018-2021
                         </li>
                         <li>
                           Nom de l'institut :  Institut supérieur des arts multimédia de La Manouba 
                         </li>
                     </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="study">
                    <p><MdSchool/> &nbsp; TECHNICIAN DIPLOMA IN COMPUTER SCIENCE AND MULTIMEDIA </p>
                     <ul>
                         <li>
                         Période :  2018-2018
                         </li>
                         <li>
                         Nom de l'institut : Institut supérieur des arts multimédia de La Manouba 
                         </li>
                     </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="study">
                    <p><MdSchool/> &nbsp; BACHELOR'S DEGREE IN EXPERIMENTAL SCIENCES</p>
                     <ul>
                         <li>
                         Période :  2016
                         </li>
                         <li>
                         Nom de l'institut : High school Assalem Boumhal
                         </li>
                     </ul>
                  </div>
                </div>
          </div>
   </>
  );
}

export default Education;
