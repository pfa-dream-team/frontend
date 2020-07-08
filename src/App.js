import React ,{useState } from 'react';
import './App.css';
import Login from './componment/login-layout/Login';
import Cookies from 'universal-cookie';
import {BrowserRouter  as Router ,Redirect,Route,Switch} from "react-router-dom";
import UserRoutes from "./componment/user-routes/UserRoutes"



function App() {
  const cookies = new Cookies()
 //cookies.remove("user")
 // const userconnected = cookies.get("user")
  const [user, setUser] = useState(cookies.get("user"))
  console.log("user connected",user)

  
  
  
 
  return (
    
    <div className="App"> 
    <Router>
       
       
        <Switch>
        <>
         
          <Route  path="/admin">
          </Route>
          <Route  path="/user">
            <UserRoutes setUser={setUser} user={user} cookies={cookies}/>
          </Route>
          <Route exact path="/">
           <Login setUser={setUser} user={user} cookies={cookies}/>
         </Route>
          </>
        </Switch>
       
      </Router>
    <Router>
      <>
      {user === undefined ? (   
      <Redirect to={'/'} setUser={setUser} user={user} cookies={cookies}/>

      ) :(
        <>
       
         {user.role === "user" ?
         (
           <>
            <Redirect to={'/user/'} setUser={setUser} user={user} cookies={cookies}/>
           </>
         ) : (
           <>

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
