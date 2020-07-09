import React from 'react';
import ListCv from "./list-cv/List-Cv"
import ListDocument from "./list-documents/List-Document"
import MainPage from "./user-main-page/MainPage"
import Menu from "./user-menu/Menu"
import "./UserRoutes.css";
import Login from "../login-layout/Login"
import CvDetails from "./cv-details/Cv-Details"



import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  
} from "react-router-dom"

function UserRoutes({setUser ,user,cookies}) {
 
  let { path } = useRouteMatch()
  console.log(path)
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
                       <MainPage />
                   </Route>
                   <Route exact path={`${path}/cvs`}>
                       <ListCv />
                   </Route>
                   <Route  exact path={`${path}/documents`}>
                     <ListDocument />
                   </Route>
                   <Route  exact path={`${path}/cv/1`}>
                     <CvDetails/>
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

export default UserRoutes;
