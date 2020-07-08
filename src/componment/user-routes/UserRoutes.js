import React from 'react';
import ListCv from "./list-cv/List-Cv"
import ListDocument from "./list-documents/List-Document"
import MainPage from "./user-main-page/MainPage"
import Menu from "./user-menu/Menu"
import "./UserRoutes.css";


import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  BrowserRouter as Router,
  
} from "react-router-dom"

function UserRoutes({setUser ,user,cookies}) {
 
  let { path } = useRouteMatch()
  console.log(path)
  return (
    
    <>
     <div className="pages-container">
       <div className="container">
         <div className="row navigation-menu">
           <Menu/>
         </div>
         <div className="content">
         <h1>c'est la page d'acceuil {user.name}</h1>
          <div className="routes">
      
        
        <Switch>
        <>
        
         <Route exact path={`${path}/cvs`}>
           <ListCv />
         </Route>
       
         <Route  exact path={`${path}/documents`}>
           <ListDocument />
         </Route>
         <Route exact path={`${path}/`}>
            <Redirect to={`${path}/homepage`} />
        </Route>
        <Route  exact path={`${path}/homepage`}>
           <MainPage />
         </Route>
        </>
       </Switch>
 
   
          </div>
         </div>
         <div className="footer">

         </div>
       </div>
   </div>
   </>
  );
}

export default UserRoutes;
