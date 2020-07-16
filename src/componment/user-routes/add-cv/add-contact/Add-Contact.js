import React,{useState}from 'react';
import "../Add-Cv.css"
import "../../cv-details/Cv-Details.css"
import "../../cv-details/Cv-Details.css"
import { BsFillEnvelopeFill} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { LoadingOutlined } from '@ant-design/icons'
import { FaPhoneAlt,FaLinkedin,FaFacebook } from "react-icons/fa";
import { Form, Input, Button, Checkbox } from 'antd';
import {AddCv} from "../../../../services/cv.service"




function AddContact({setUser ,user,cookies}) {
    const [position,setPosition] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [tel,setTel] = useState("");
    const [linkedin,setLinkedIn] = useState("");
    const [facebook,setFacebook] = useState("");
    const [user_id,setUserId] = useState(user._id)
    const [cv,setCv] = useState(user.cv)
    const [loading , setLoading] = useState(true)

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
    const addContact = async (user_id,address,tel,linkedin,facebook,position) => {
      setLoading(true)
      const result = await AddCv(user_id,address,tel,linkedin,facebook,position)
      cookies.set("user",result,{ path: '/',  expires: 0  })
      setCv(result.cv)
      setLoading(false)
    }   
  
  return (
            <>
             <div className="information row">
                 {cv === null ? (
                    <>
                       <div className="col-md-12">
                   <div className="title">
                    <h3>Ajouter vos Contact</h3>
                   </div>
                </div>
              <Form {...layout} name="basic" >
               <div className="form row">
                 <div className="col-md-6 input-form">
                    <Form.Item   name="position"
                      rules={[{ required: true, message: 'veuillez saisir votre poste' }]} >
                      <Input placeholder="→  Poste" onChange={handlePosition} value={position}/>
                    </Form.Item>
                 </div>
                 <div className="col-md-6 input-form">
                    <Form.Item   name="address"
                      rules={[{ required: true, message: 'veuillez saisir votre addresse' }]} >
                      <Input placeholder="→  Addresse" onChange={handleAddress} value={address}/>
                    </Form.Item>
                 </div>
                 <div className="col-md-6 input-form">
                    <Form.Item   name="tel"
                      rules={[{ required: true, message: 'veuillez saisir votre tel' }]} >
                      <Input placeholder="→  Num Télephone" onChange={handleTel} value={tel} type="number"/>
                    </Form.Item>
                 </div>
                 <div className="col-md-6 input-form">
                    <Form.Item   name="linkedIn"
                      rules={[{ required: true, message: 'veuillez saisir votre lien LinkedIn' }]} >
                      <Input placeholder="→  Lien linkedIn" onChange={handleLinkedIn} value={linkedin}/>
                    </Form.Item>
                 </div>
                 <div className="col-md-6 input-form">
                    <Form.Item   name="facebook"
                      rules={[{ required: true, message: 'veuillez saisir votre lien Facebook' }]} >
                      <Input placeholder="→  Lien Facebook" onChange={handleFacebook} value={facebook}/>
                    </Form.Item>
                 </div>
                 <div className="col-md-6"> 
                   <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit" onClick={()=>addContact(user_id,address,tel,linkedin,facebook,position)}>
                          Confirmer
                      </Button>
                    </Form.Item>
                 </div>
               </div>
             </Form>
              
                    </>
                ):(
               <>
                {loading ? (
                <>
                  <div className="loading" >
                    <LoadingOutlined />
                   </div>
                </>
              ) : (
                <>
                <div className="col-md-12">
                   <div className="title">
                    <h3>Contact</h3>
                </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <BsFillEnvelopeFill/>
                  </div>
                  <div className="description">
                      <p>{cv.email}</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <MdLocationOn/>
                  </div>
                  <div className="description">
                    <p>{cv.address}</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <FaPhoneAlt/>
                  </div>
                  <div className="description">
                      <p>(+216) {cv.tel}</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <FaLinkedin/>
                  </div>
                  <div className="description">
                      <p>{cv.linkedin}</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div className="icon">
                    <FaFacebook/>
                  </div>
                  <div className="description">
                     <p>{cv.facebook}</p>
                  </div>
                </div>
                </>
                )}
               </>
              )}
              </div>
            </>
             
   );
}

export default AddContact;
