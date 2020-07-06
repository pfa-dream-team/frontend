import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useRouteMatch
  } from "react-router-dom"



function AdminRoutes() {
    let { path } = useRouteMatch()
 
  return (
    <div>hello</div>
   
  );
}

export default AdminRoutes;
