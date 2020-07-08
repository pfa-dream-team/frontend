import React from 'react';
import {  Link} from "react-router-dom"
import "./Menu.css"




function Menu() {


  return (
    
   <>
    <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <>
            
             <Link 
             to={location => ({ ...location, pathname: "/admin/homepage" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/admin/homepage") 
          }>
                Accueil
             </Link>{" "}
            </>
          </li>
          <li className="nav-item">
            <>
             <Link 
             to={location => ({ ...location, pathname: "/admin/cvs" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/admin/cvs") 
          }
             >
                Liste des cv
             </Link>{" "}
            </>
          </li>   
           <li className="nav-item">
             <>
             <Link 
             to={location => ({ ...location, pathname: "/admin/documents" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/admin/documents") 
          }
             >
                Liste des documents
             </Link>{" "}
            </>
           </li>
       </ul>
       </div>
    </nav>
   </>
  );
}

export default Menu;
