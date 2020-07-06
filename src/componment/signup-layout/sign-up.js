import React ,{useState} from 'react';
import "../login-layout/Login.css";
import Login from "../login-layout/Login";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; 



function Signup() {

  const [modelogin, setModelogin] = useState(false);
  const [name , setName] = useState("");
  const [last_name , setLastName] = useState("");
  const [inscription , setInscription] = useState("");
  const [birth , setBirth] = useState("");
  const [grade , setGrade] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const handleName = (e)=>{
    setName(e.target.value);
  }
  const handleLastName = (e)=>{
    setLastName(e.target.value);
  }
  const handleInscription = (e)=>{
    setInscription(e.target.value);
  }
  const handleBirth = (date, dateString)=>{
    setBirth(dateString);
    
  }
  const handleGrade = (e)=>{
    setGrade(e.target.value);
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }

 
  return (
    
      <>
    {!modelogin ? (
        <>
        <div className="login-container">
          <div className="header-caption">
          <div className="login-icon">
             <img src={process.env.PUBLIC_URL + '/imgs/logo.png'} alt="login img"/>
           </div>
              <p>S'inscrire</p>
          </div>
          <div className="content-caption">
            <div className="form row">
              <div className="col-md-12 input-form">
                  <input type="text" name="name" placeholder="→  Nom" value={name} onChange={handleName} required/> 
              </div>
              <div className="col-md-12 input-form">
                  <input type="text" name="last_name" placeholder="→  Prénom" value={last_name} onChange={handleLastName} required/> 
              </div>
              <div className="col-md-12 input-form">
                  <input type="text" name="inscription" placeholder="→  Numéro Inscription" value={inscription} onChange={handleInscription} required/> 
              </div>
              <div className="col-md-12 input-form">
                <DatePicker onChange={handleBirth}
                     placeholder="→ Date de naissance"/>
              </div>
              <div className="col-md-12 input-form">
               <select className="select" onChange={handleGrade}>
                 <option selected disabled>→   Niveau d'étude</option>
                 <option value="0">Ancien étudiant</option>
                 <option value="1">Licence</option>
                 <option value="2">Master</option>
                 <option value="3">Cycle ingénieur</option>
              </select>
              </div>
              <div className="col-md-12 input-form">
                 <input type="email" name="email" placeholder="→  Email" value={email} onChange={handleEmail} required/> 
             </div>
              <div className="col-md-12 input-form">
                  <input type="password" name="password" placeholder="→  Mot de passe" value={password} onChange={handlePassword} required/> 
              </div>
              <div className="col-md-12 input-form">
                <button className="btn-form btn-2">submit</button>
              </div>
            </div>
          </div>
         <div className="footer-caption">
             <p> &nbsp; Ou &nbsp; </p>
             <button className="btn-form" onClick={()=>{setModelogin(true)}}>Se Connecter</button>
         </div>
        </div>
     </>

    ) : (
       <>
        <Login/>
       </>
    )}
    </>

     
  );
}

export default Signup;
