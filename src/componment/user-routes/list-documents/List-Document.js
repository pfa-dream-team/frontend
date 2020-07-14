import React,{useState}from 'react';
import Document from "../document/Document"
import "./List-Document.css"
import { LoadingOutlined } from '@ant-design/icons'



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
          {loading ? (<>
            <div className="loading" >
               <LoadingOutlined />
             </div>
          </>) : (<>
           <Document/> <Document/> <Document/>   
          </>)}
     </div>
      </div>
    </>
   );

}

export default ListDocument;



