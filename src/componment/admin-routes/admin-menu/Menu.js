import React from 'react'
import {  NavLink} from "react-router-dom"
import "./Menu.css"
import { BsXCircle} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

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
             <span className=""><AiOutlineAlignRight/></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <>
             <NavLink 
             to={location => ({ ...location, pathname: "/admin/cvs" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/admin/cvs") 
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
             to={location => ({ ...location, pathname: "/admin/documents" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/admin/documents") 
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
             to={location => ({ ...location, pathname: "/admin/users" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/admin/users") 
          }
             >
                <FaUsers/>
                Liste des Utilisateurs
             </NavLink>{" "}
            </>
           </li>     
           <li className="user-interface-btn nav-item">
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
