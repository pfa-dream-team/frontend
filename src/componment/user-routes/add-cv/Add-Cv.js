import React,{useState}from 'react';
import "./Add-Cv.css"
import "../cv-details/Cv-Details.css"
import AddContact from './add-contact/Add-Contact'
import AddEducation from './add-education/Add-Education'
import AddExperince from './add-experience/Add-Experience'
import AddCompetence from "./add-competence/Add-Competence"


function AddCv({setUser ,user,cookies}) {
    const  [showEductaionFrom ,setShowEducationFrom] = useState(true);
    const  [MoreEductaion ,setMoreEducation] = useState(true);

  return (
    
    <>
      <div className="sub-page">
        <div className="sub-page-title">
          <p>Creer votre cv {user.name}</p>  
            
        </div>
        <div className="cv-detailed col-md-12" >
          <div className="cv-header">
            <h3>{user.name} {user.last_name}</h3>
            <span className="break"></span>
          </div>
          <div className="cv-content">
            <AddContact setUser={setUser} user={user} cookies={cookies}/>
            <AddEducation setUser={setUser} user={user} cookies={cookies}/>
            <AddExperince setUser={setUser} user={user} cookies={cookies}/>
            <AddCompetence setUser={setUser} user={user} cookies={cookies}/>

          </div>
          <div className="cv-footer">
         
          </div>  
       </div>
      </div>
    </>
   );
}

export default AddCv;
