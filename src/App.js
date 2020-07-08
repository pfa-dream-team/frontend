import React ,{useState } from 'react';
import './App.css';
import Login from './componment/login-layout/Login';
import Cookies from 'universal-cookie';
import {BrowserRouter  as Router ,Redirect,Route,Switch} from "react-router-dom";
import UserRoutes from "./componment/user-routes/UserRoutes"
import AdminRoutes from "./componment/admin-routes/AdminRoutes"



function App() {
  const cookies = new Cookies()
  //cookies.remove("user")
 // const userconnected = cookies.get("user")
  const [user, setUser] = useState(cookies.get("user"))
  console.log("user connected",user)

  
  
  
 
  return (
    
    <div className="App"> 
    <Router>
    <Route exact path="/">
      <Redirect to={'/login'} setUser={setUser} user={user} cookies={cookies}/>
    </Route>
    <Route exact path="/login">
        <Login setUser={setUser} user={user} cookies={cookies}/>
    </Route>
    </Router>
    <Router>
        <Switch>
        <>
          
          <Route  path="/admin">
            <AdminRoutes setUser={setUser} user={user} cookies={cookies}/>
          </Route>
          <Route  path="/user">
            <UserRoutes setUser={setUser} user={user} cookies={cookies}/>
          </Route>
         
          </>
        </Switch>
       
      </Router>
    <Router>
      <>
      {user === undefined ? (   
      <Redirect to={'/login'} setUser={setUser} user={user} cookies={cookies}/>

      ) :(
        <>
       
         {user.role === "user" ?
         (
           <>
            <Redirect to={'/user/'} setUser={setUser} user={user} cookies={cookies}/>
           </>
         ) : (
           <>
            <Redirect to={'/admin/'} setUser={setUser} user={user} cookies={cookies}/>
           </>
         )}
        </>
      )}
      </>
      </Router>
    </div>
  );
}

export default App;
