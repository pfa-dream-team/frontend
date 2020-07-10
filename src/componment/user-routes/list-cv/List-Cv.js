import React,{useState}from 'react';
import "./List-Cv.css"
import LoadingCv from "../cv/LoadingCv"
import Cv from "../cv/Cv"
import {  Link} from "react-router-dom"




function ListCv({setUser ,user,cookies}) {
  const [loading , setLoading] = useState(true)

  
  return (
    
    <>
      <div className="sub-page">
        <div className="sub-page-title">
          <p>Liste des cv</p>
          <>
          {user.role === "user" ? (
            <>
            <Link 
             to={location => ({ ...location, pathname: "/user/add-cv/1" })} > 
                Ajouter un cv 
               
             </Link>{" "}
            </>
          ) :(<> </>)}
          </>
            
          
        </div>
        <div className="block-search">
 
        </div>
        <div className="block-content-list row">
          {!loading ? (<>
           <LoadingCv/>  <LoadingCv/>  <LoadingCv/> 
          </>) : (<>
           <Cv/> <Cv/> <Cv/>   
          </>)}
     </div>
      </div>
    </>
   );
}

export default ListCv;
