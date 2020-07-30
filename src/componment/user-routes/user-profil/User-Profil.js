import React,{useState,useEffect}from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import "./User-Profil.css"
import "../../login-layout/Login.css";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; 
import { Form, Input, Select,  AutoComplete} from 'antd';
import {allUserDocuments} from "../../../services/document.service"
import {   Skeleton, Card, Avatar } from 'antd';
import { DeleteOutlined,CheckOutlined } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;





function UserProfil({setUser ,user,cookies}) {
  const user_id = user._id
  const [loading , setLoading] = useState(true)
  const [documents , setDocuments] = useState(user.documents)
  const [modeEdit , setModeEdit] = useState(false)
  const [name , setName] = useState(user.name);
  const [last_name , setLastName] = useState(user.last_name);
  const [inscription , setInscription] = useState(user.inscription_number);
  const [birth , setBirth] = useState(user.birth);
  const [grade , setGrade] = useState(user.grade);
  const [email , setEmail] = useState(user.email);
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
  
  const { TabPane } = Tabs;
  useEffect(() => {
    const fetchData = async () => {
      try{
      setLoading(true)
      const result = await allUserDocuments(user_id)
      setDocuments(result.documents)
      setLoading(false)
      }
      catch(e){
       setLoading(false)
      }
    }

    fetchData()
  }, [])
 


  
  return (
    
    <>
      <div className="sub-page">
        <div className="sub-page-title">
          <p>Votre Profile {user.name}</p>
        </div>
        <div className="block-search">
 
        </div>
        <div className="block-content-list row">
             <>
                <div className="row width">
                 <div className="container">
                   <Tabs defaultActiveKey="1" >
                    <TabPane tab="Editer vos informations" key="1">
                        <div className="form row">
                          <Form {...layout} name="basic" initialValues={{ remember: true }}  className="row"     >
                            <div className="col-md-6 input-form">
                               <Form.Item   name="name"
                                   rules={[{ required: true, message: 'veuillez saisir votre nom!' }]} >
                                 <Input placeholder="→  Nom" onChange={handleName} defaultValue={name}/>
                               </Form.Item>
                            </div>
                            <div className="col-md-6 input-form">
                             <Form.Item   name="last_name"
                                    rules={[{ required: true, message: 'veuillez saisir votre prénom!' }]} >
                                <Input placeholder="→  Prénom" onChange={handleLastName} defaultValue={last_name}/>
                             </Form.Item>
                            </div>
                            <div className="col-md-6 input-form">
                             <Form.Item   name="inscription"
                                rules={[{ required: true, message: 'veuillez saisir votre numéro inscription!' }]} >
                              <Input placeholder="→  Num Inscription" onChange={handleInscription} defaultValue={inscription} />
                             </Form.Item>
                           </div>
                            <div className="col-md-6 input-form">
                              <Form.Item   name="birth"
                                rules={[{ required: true, message: 'veuillez saisir votre date de naissance!' }]} >
                                <DatePicker onChange={handleBirth}
                                  placeholder="→ Date de naissance" value={birth}/>     
                              </Form.Item>
                            </div>
                            <div className="col-md-6 input-form">
                              <Form.Item  name="grade"
                                  rules={[{ required: true, message: 'veuillez saisir votre niveau' }]}>
                                 <Select onChange={handleGrade} defaultValue={grade} >
                                    <Select.Option value="Ancien étudiant">Ancien étudiant</Select.Option>
                                    <Select.Option value="Licence">Licence</Select.Option>
                                    <Select.Option value="Master">Master</Select.Option>
                                    <Select.Option value="Cycle ingénieur">Cycle ingénieur</Select.Option>
                                 </Select>
                              </Form.Item>
                            </div>
                            <div className="col-md-6 input-form">
                              <Form.Item   name="email"
                                rules={[{ required: true, message: 'veuillez saisir votre email!' }]} >
                               <Input placeholder="→  Email" onChange={handleEmail} defaultValue={email}/>
                              </Form.Item>
                            </div>
                            <div className="col-md-12 input-form">
                              <button className="btn-form btn-2" >submit</button>
                            </div>
                          </Form>
                          
                         </div> 
                    </TabPane>
                    <TabPane tab="vos document" key="2">
                    {loading ? (<>
                      <div className="loading" >
                        <LoadingOutlined />
                       </div>
                         </>
                        ) : (
                       <>
                          <div className="row">
                              {documents !== null ? (<>
                                {documents.map(document => (
                              <div className="col-md-4  margin">
                                 <Card  actions={[
                                <EditOutlined  />,
                                <DeleteOutlined />
                               ]} >
                                <Meta
                                  avatar={
                                    <Avatar src={process.env.PUBLIC_URL + '/imgs/file.png'} />
                                  }
                                  title={document.name}
                                  description={document.description}
                                  cible={document.cible}
                                />
                                
                            </Card>
                             
                              </div>
                              ))}
                              
                              </>) : (<>
                              </>)}
                         
                          
                </div>  
                       </> 
                       )}

                    </TabPane>
                    
                  </Tabs>
                 </div>
                          
                </div>   
          </>
     </div>
      </div>
    </>
   );
}

export default UserProfil;
