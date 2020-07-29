import React,{useState}from 'react';
import "./Add-Document.css"
import "../cv-details/Cv-Details.css"



function AddDocument({setUser ,user,cookies}) {
    

  return (
    
    <>
      <div className="sub-page">
        <div className="sub-page-title">
          <p>Ajouter des documents {user.name}</p>  
        </div>
        <div className="cv-detailed col-md-12" >
          
        
       </div>
      </div>
    </>
   );
}

export default AddDocument;
