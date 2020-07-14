import React from 'react';
import {  NavLink} from "react-router-dom"

import { BsXCircle ,BsPerson } from "react-icons/bs";
import
 { AiOutlineHome
  ,AiOutlineAlignRight,
  AiOutlineFileText,
  AiOutlineFileProtect,
  
 
  } from "react-icons/ai"


function Menu({setUser ,user,cookies}) {
   const disconnect = (e) =>{
      e.preventDefault()
      cookies.remove("user", { path: '/' })
      setUser(cookies.get("user"))
      console.log(cookies.get("user"),user)
      window.location.reload(false);
   }

  return (
  
   <>
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + '/imgs/logo.png'} alt="login img"/></a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span ><AiOutlineAlignRight/></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <>
            
             <NavLink
             to={location => ({ ...location, pathname: "/user/homepage" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/user/homepage") 
          }>
               <AiOutlineHome/> Accueil
             </NavLink>{" "}
            </>
          </li>
          <li className="nav-item">
            <>
             <NavLink 
             to={location => ({ ...location, pathname: "/user/cvs" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/user/cvs") 
          }
             >
              <AiOutlineFileProtect/>
                Liste des cv
             </NavLink>{" "}
            </>
          </li>   
           <li className="nav-item">
             <>
             <NavLink 
             to={location => ({ ...location, pathname: "/user/documents" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/user/documents") 
          }
             >
                <AiOutlineFileText/>
                Liste des documents
             </NavLink>{" "}
            </>
           </li>
           <li className="nav-item">
             <>
             <NavLink 
             to={location => ({ ...location, pathname: "/user/documents" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/user/documents") 
          }
             >
                <BsPerson/>
                Profile
             </NavLink>{" "}
            </>
           </li>
           <li className="user-interface-btn nav-item dropdown">
             <button onClick={disconnect}>
               
               <BsXCircle/>
               Déconnexion
             </button>
           </li>
       </ul>
       </div>
    </nav>
   </>
  );
}

export default Menu;
