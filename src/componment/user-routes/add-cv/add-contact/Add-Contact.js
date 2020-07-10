import React,{useState}from 'react';
import "../Add-Cv.css"
import "../../cv-details/Cv-Details.css"
import { Form, Input, Button, Checkbox } from 'antd';





function AddContact({setUser ,user,cookies,cv,setCv}) {
    const [position,setPosition] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [tel,setTel] = useState("");
    const [linkedIn,setLinkedIn] = useState("");
    const [facebook,setFacebook] = useState("");
    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      };
      const tailLayout = {
        wrapperCol: { offset: 1, span: 24 },
      };
     //change hadelers
     const handlePosition = (e)=>{
        setPosition(e.target.value);
    } 
    const handleAddress = (e)=>{
        setAddress(e.target.value);
    } 
    const handleEmail = (e)=>{
      setEmail(e.target.value);
    }
    const handleTel = (e)=>{
        setTel(e.target.value);
    } 
    const handleLinkedIn = (e)=>{
        setLinkedIn(e.target.value);
    }
    const handleFacebook = (e)=>{
        setFacebook(e.target.value);
    }    
  
  return (
            <>
              <Form {...layout} name="basic" >
                 <div className="col-md-6 input-form">
                    <Form.Item   name="email"
                      rules={[{ required: true, message: 'veuillez saisir votre poste' }]} >
                      <Input placeholder="→  Poste" onChange={handlePosition} value={position}/>
                    </Form.Item>
                 </div>
              </Form>
            </>
             
   );
}

export default AddContact;
