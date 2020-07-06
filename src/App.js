import React ,{useState} from 'react';
import './App.css';
import Login from './componment/login-layout/Login';



function App() {
  const [user, setUser] = useState({})

 
  return (
    
    <div className="App"> 
     <Login setUser={setUser}/>
    </div>
  );
}

export default App;
