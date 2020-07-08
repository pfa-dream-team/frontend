import React ,{useState} from 'react';
import "../login-layout/Login.css";
import Login from "../login-layout/Login";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; 
import { Form, Input, Select } from 'antd';
import {SignUp } from "../../services/authentification.service";




function Signup({setUser ,user}) {

  const [modelogin, setModelogin] = useState(false);
  const [name , setName] = useState("");
  const [last_name , setLastName] = useState("");
  const [inscription , setInscription] = useState("");
  const [birth , setBirth] = useState("");
  const [grade , setGrade] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState(false);
  const [signed , setSigned] = useState(false);


  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
 
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
  const handleGrade = (value)=>{
    setGrade(value);
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }
  const Sign = async () => {
   try{
      const result = await SignUp(name,last_name,inscription,birth,grade,email , password)
      console.log("result :" ,result)
    if (result === undefined){
      setError(true)
    }else{
      setSigned(true)
      setUser(result)
      setError(false)
     
    }
    
      }
      catch(e){
        console.log(e)
      }
    
 
} 
 
  return (
    
      <>
    {!modelogin ? (
     
        <>
         {!signed ? 
         (<>
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
               <p>Vérifier vos informations</p>
             </>

           )}
         
         </div>
          <div className="content-caption">
            <div className="form row">
            <Form {...layout} name="basic" initialValues={{ remember: true }}       >
              <div className="col-md-12 input-form">
                <Form.Item   name="name"
                 rules={[{ required: true, message: 'veuillez saisir votre nom!' }]} >
                   <Input placeholder="→  Nom" onChange={handleName} value={name}/>
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
                <Form.Item   name="last_name"
                 rules={[{ required: true, message: 'veuillez saisir votre prénom!' }]} >
                   <Input placeholder="→  Prénom" onChange={handleLastName} value={last_name}/>
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
                <Form.Item   name="inscription"
                 rules={[{ required: true, message: 'veuillez saisir votre numéro inscription!' }]} >
                   <Input placeholder="→  Num Inscription" onChange={handleInscription} value={inscription} />
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
                <Form.Item   name="birth"
                   rules={[{ required: true, message: 'veuillez saisir votre date de naissance!' }]} >
                    <DatePicker onChange={handleBirth}
                     placeholder="→ Date de naissance" value={birth}/>     
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
                <Form.Item  name="grade"
                   rules={[{ required: true, message: 'veuillez saisir votre niveau' }]}>
                    <Select onChange={handleGrade} value={grade} defaultValue="default">
                       <Select.Option value="default" disabled>→  &nbsp;Niveau d'étude</Select.Option>
                       <Select.Option value="0">Ancien étudiant</Select.Option>
                       <Select.Option value="1">Licence</Select.Option>
                       <Select.Option value="2">Master</Select.Option>
                       <Select.Option value="3">Cycle ingénieur</Select.Option>
                    </Select>
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
               <Form.Item   name="email"
                  rules={[{ required: true, message: 'veuillez saisir votre email!' }]} >
                 <Input placeholder="→  Email" onChange={handleEmail} value={email}/>
               </Form.Item>
             </div>
              <div className="col-md-12 input-form">
                <Form.Item  name="password"
                   rules={[{ required: true, message: 'veuillez saisir votre mot de passe!' }]}
                  >
                <Input.Password placeholder="→  Mot de passe"  onChange={handlePassword} value={password}/>
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
                <button className="btn-form btn-2" onClick={Sign}>submit</button>
              </div>
            </Form>
            </div>
          </div>
         <div className="footer-caption">
             <p> &nbsp; Ou &nbsp; </p>
             <button className="btn-form" onClick={()=>{setModelogin(true)}}>Se Connecter</button>
         </div>
        </div>
         </>) :(
            <>
            <div className="big-warning">
            <div className="login-icon">
                <img src={process.env.PUBLIC_URL + '/imgs/error.png'} alt="login img"/>
            </div>
              <h3>Votre compte est n'est pas encore active</h3>
            </div>
           </>
         
         
        ) }
       
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
