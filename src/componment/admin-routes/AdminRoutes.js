import React from 'react';
import ListCv from "../user-routes/list-cv/List-Cv"
import ListDocument from "../user-routes/list-documents/List-Document"
import MainPage from "./admin-main-page/MainPage"
import Menu from "./admin-menu/Menu"
import "./AdminRoutes.css";


import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  
} from "react-router-dom"

function AdminRoutes({setUser ,user,cookies}) {
 
  let { path } = useRouteMatch()
  return (
    
    <>
     <div className="pages-container">
       <div className="container">
         <div className="row navigation-menu">
           <Menu/>
         </div>
         <div className="content">
         <h1>c'est la page d'acceuil admin {user.name}</h1>
          <div className="routes">
      
        
        <Switch>
        <>
        <Route exact path={`${path}/`}>
            <Redirect to={`${path}/homepage`} />
        </Route>
        <Route  exact path={`${path}/homepage`}>
           <MainPage />
         </Route>
         <Route exact path={`${path}/cvs`}>
           <ListCv />
         </Route>
         <Route  exact path={`${path}/documents`}>
           <ListDocument />
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

export default AdminRoutes;
