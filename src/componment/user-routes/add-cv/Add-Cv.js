import React,{useState}from 'react';
import "./Add-Cv.css"
import "../cv-details/Cv-Details.css"
import AddContact from './add-contact/Add-Contact'
import Contact from "../cv-details/cv-fields/Contact"
import AddEducation from './add-education/Add-Education'
import Education from "../cv-details/cv-fields/Education"
import {  PlusOutlined } from '@ant-design/icons';



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
            {user.cv === null ? (
            <>
            <AddEducation setUser={setUser} user={user} cookies={cookies}/>
            </>
            ):(
            <>
            </>
            )}
          </div>
          <div className="cv-footer">
         
          </div>  
       </div>
      </div>
    </>
   );
}

export default AddCv;
