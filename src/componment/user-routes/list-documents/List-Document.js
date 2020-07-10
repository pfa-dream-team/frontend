import React,{useState}from 'react';
import DocumentLoading from "../document/Document-loading"
import Document from "../document/Document"



function ListDocument({setUser ,user,cookies}) {
  const [loading , setLoading] = useState(true)
  return (
    
    <>
      <div className="sub-page">
        <div className="sub-page-title">
          <p>Liste des cv</p>
        </div>
        <div className="block-search">
 
        </div>
        <div className="block-content-list row">
          {!loading ? (<>
           <DocumentLoading/>  <DocumentLoading/>  <DocumentLoading/> 
          </>) : (<>
           <Document/> <Document/> <Document/>   
          </>)}
     </div>
      </div>
    </>
   );

}

export default ListDocument;



