import React,{useState}from 'react';
import "./Add-Cv.css"
import "../cv-details/Cv-Details.css"
import AddContact from './add-contact/Add-Contact'




function AddCv({setUser ,user,cookies}) {
    const  [cv , setCv] = useState({})
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
              {cv === "{}" ? (
                  <>
                    <AddContact setUser={setUser} user={user} cookies={cookies} cv={cv} setCv={setCv}/>
                  </>
              ) : (<>
              </>)}


             
          
         
          </div>
          <div className="cv-footer">
         
          </div>  
       </div>
      </div>
    </>
   );
}

export default AddCv;
