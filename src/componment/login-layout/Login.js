import React ,{useState} from 'react';
import "./Login.css";
import Signup from "../signup-layout/sign-up"



function Login() {
  const [modeSignup, setModeSignup] = useState(false);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }

 
  return (
    <>
    {!modeSignup ? (
      <>
       <div className="login-container">
         <div className="header-caption">
         <div className="login-icon">
            <img src={process.env.PUBLIC_URL + '/imgs/logo.png'} alt="login img"/>
          </div>
             <p>Se Connecter</p>
         </div>
         <div className="content-caption">
           <div className="form row">
             <div className="col-md-12 input-form">
                 <input type="email" name="email" placeholder="→  Email" value={email} onChange={handleEmail} required/> 
             </div>
             <div className="col-md-12 input-form">
                 <input type="password" name="password" placeholder="→  Mot de passe" value={password} onChange={handlePassword} required/> 
             </div>
             <div className="col-md-12 input-form">
               <button className="btn-form btn-2">login</button>
             </div>
           </div>
         </div>
        <div className="footer-caption">
            <p> &nbsp; Ou &nbsp; </p>
            <button className="btn-form" onClick={()=>{setModeSignup(true)}}>S'inscrire</button>
        </div>
       </div>
    </>
    

    ) :(
      <>
      <Signup />
      </>
    )}
    </>
  );
}

export default Login;
