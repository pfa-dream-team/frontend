import React ,{useState,useRef} from 'react';
import "./Login.css";
import Signup from "../signup-layout/sign-up";
import {Authentification } from "../../services/authentification.service";




function Login({setUser ,user}) {
  const [modeSignup, setModeSignup] = useState(false);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [authenticated , setAuthentificated] = useState(false);
  const [error , setError] = useState(false);
  const [accept , setAccept] = useState(false);




  //change hadelers
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }
  const Auth = async (e) => {
    const result = await Authentification(email , password)
    console.log("result :" ,result)
    if (result === undefined){
      setError(true)
    }else{
      
      setUser(result)
      setAuthentificated(true)
      setError(false)
      if (user.active === 1){
        setAccept(true)
      }else{
        setAccept(false)
      }
    }
  }
 
  return (
    <>
    {!authenticated ? (
      <>
    {!modeSignup ? (
      <>
       <div className="login-container">
         <div className="header-caption">
           {!error ? (
             <>
            <div className="login-icon">
             <img src={process.env.PUBLIC_URL + '/imgs/logo.png'} alt="login img"/>
            </div> 
              <p>Se connecter</p>
              </>
           ) : (
             <>
             <div className="login-icon">
                <img src={process.env.PUBLIC_URL + '/imgs/error.png'} alt="login img"/>
              </div>
               <p>Vérifier l'email et mot de passe</p>
             </>

           )}
         
         </div>
         <div className="content-caption">
           <div className="form row">
             <div className="col-md-12 input-form">
                 <input type="email" name="email" placeholder="→  Email" 
                 value={email} onChange={handleEmail} required /> 
             </div>
             <div className="col-md-12 input-form">
                 <input type="password" name="password" placeholder="→  Mot de passe"
                  value={password} onChange={handlePassword} required /> 
             </div>
             <div className="col-md-12 input-form">
               <button className="btn-form btn-2" onClick={Auth}>login</button>
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
    
    ):( 
    <>
     {!accept ? (
       <>
        <div className="big-warning">
        <div className="login-icon">
            <img src={process.env.PUBLIC_URL + '/imgs/error.png'} alt="login img"/>
        </div>
          <h3>Votre compte est n'est pas encore active</h3>
        </div>
       </>

     ) : (
        <>
        </>
     )
      }

      
    </>
    )}
    </>
  );
}

export default Login;
