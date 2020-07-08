import React from 'react';
import {  Link} from "react-router-dom"




function Menu() {


  return (
    
   <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
          <li>
            <>
             <Link to={location => ({ ...location, pathname: "/user/homepage" })} activeClassName="active">
                Accueil
             </Link>{" "}
            </>
             <>
             <Link to={location => ({ ...location, pathname: "/user/cvs" })} activeClassName="active">
                Liste des cv
             </Link>{" "}
            </>
            <>
             <Link to={location => ({ ...location, pathname: "/user/documents" })} activeClassName="active">
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
