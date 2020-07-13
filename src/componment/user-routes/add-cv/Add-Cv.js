import React,{useState}from 'react';
import "./Add-Cv.css"
import "../cv-details/Cv-Details.css"
import AddContact from './add-contact/Add-Contact'
import Contact from "../cv-details/cv-fields/Contact"
import AddEducation from './add-education/Add-Education'
import Education from "../cv-details/cv-fields/Education"
import {  PlusOutlined } from '@ant-design/icons';



function AddCv({setUser ,user,cookies}) {
    const  [cv , setCv] = useState("1")
    const  [education , setEducation] = useState("1")
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
             {cv !== 1 ? (
                  <>
                    <AddContact setUser={setUser} user={user} cookies={cookies} cv={cv} setCv={setCv}/>
                  </>
              ) : (<>
                 <Contact user={user} cookies={cookies} cv={cv}/>
              </>
              )}
              {showEductaionFrom ? (
                <>
                  {education == 1 ? (
                  <>
                    <AddEducation setUser={setUser} user={user} cookies={cookies} cv={cv} setCv={setCv}/>
                    
                  </>
              ) : (
              <>
                 <Education user={user} cookies={cookies} cv={cv}/>
                 <div className="row"> 
                       <div className="col-md-12 more-field">
                         <button className="more" onClick={()=>setMoreEducation(true)}>
                            <PlusOutlined /> Education
                          </button>
                       </div>
                 </div>
              </>
              )}
                </>

              ) : (
                <>

                </>

              )
            }
 
          </div>
          <div className="cv-footer">
         
          </div>  
       </div>
      </div>
    </>
   );
}

export default AddCv;
