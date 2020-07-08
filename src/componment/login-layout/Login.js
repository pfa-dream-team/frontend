import React ,{useState,} from 'react';
import "./Login.css";
import 'antd/dist/antd.css'; 
import Signup from "../signup-layout/sign-up";
import { Form, Input, Button, Checkbox } from 'antd';
import {Authentification } from "../../services/authentification.service";




function Login({setUser ,user,cookies}) {
  const [modeSignup, setModeSignup] = useState(false);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [authenticated , setAuthentificated] = useState(false);
  const [error , setError] = useState(false);
  const [accept , setAccept] = useState(false);
  const [remember , setRemember] = useState(false);
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const tailLayout = {
    wrapperCol: { offset: 1, span: 24 },
  };
  

  

  //change hadelers
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }
  const handleCheck = (e) =>{
      setRemember(e.target.checked)
  }
  const Auth = async (e) => {
    const result = await Authentification(email , password)
   // console.log("result :" ,result)
    if (result === undefined){
      setError(true)
      cookies.remove("user")
    }else{
      
      if (result.active === 1){
        if (remember === true){
          cookies.set("user",result,{ path: '/' })
        }
        setUser(result)
        setAuthentificated(true)
        setError(false)
        setAccept(true)
        window.location.reload(false);
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

          <Form {...layout} name="basic" initialValues={{ remember: true }}       >
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
           <Form.Item {...tailLayout} name="remember" valuePropName="">
            <Checkbox onChange={handleCheck} value={remember}>Remember me</Checkbox>
           </Form.Item>
           </div>
           <div className="col-md-12 input-form">
             <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={Auth}>
                 Submit
              </Button>
             </Form.Item>
           </div>
          </Form>
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
      <Signup setUser={setUser} user={user}/>
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
