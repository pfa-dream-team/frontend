import React,{useState} from 'react';
import ListCv from "../user-routes/list-cv/List-Cv"
import ListDocument from "../user-routes/list-documents/List-Document"
import MainPage from "./admin-main-page/MainPage"
import Menu from "./admin-menu/Menu"
import "./AdminRoutes.css";
import Login from "../login-layout/Login"


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
    {user === undefined ? (
      <>
      <Login setUser={setUser} user={user} cookies={cookies}/>
      </>

    ) : (
      <>
      <div className="pages-container">
       <div className="container">
         <div className="row navigation-menu">
           <Menu setUser={setUser} user={user} cookies={cookies}/>
         </div>
         <div className="content">
          <div className="routes">
      
             <Switch>
        <>
        <Route exact path={`${path}/`}>
            <Redirect to={`${path}/homepage`} />
        </Route>
        <Route  exact path={`${path}/homepage`}>
           <MainPage  setUser={setUser} user={user} cookies={cookies}/>
         </Route>
         <Route exact path={`${path}/cvs`}>
           <ListCv setUser={setUser} user={user} cookies={cookies}/>
         </Route>
         <Route  exact path={`${path}/documents`}>
           <ListDocument setUser={setUser} user={user} cookies={cookies}/>
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
    )}
     
   </>
  );
}

export default AdminRoutes;
