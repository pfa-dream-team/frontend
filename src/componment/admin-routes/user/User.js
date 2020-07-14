import React,{useState,useEffect}from 'react';
import "./User.css"
import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined,CheckOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd'
import { Form, Input, Select, Switch} from 'antd'
import moment from 'moment';
import { Checkbox } from 'antd';

const { Meta } = Card;

function User({user,edit, setUsers,DeleteUser,ActivateUser}) {
  const dateFormat = 'YYYY-MM-DD';
  const [modeEdit , setModeEdit] = useState(false)
  const [name , setName] = useState(user.name);
  const [last_name , setLastName] = useState(user.last_name);
  const [inscription , setInscription] = useState(user.inscription_number);
  const [birth , setBirth] = useState(user.birth);
  const [grade , setGrade] = useState(user.grade);
  const [email , setEmail] = useState(user.email);
  const [role , setRole] = useState(user.role);
  const [id ,setId] = useState(user._id);
  const [activeState , setActiveState] = useState(user.active);

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
  const handleRole = (e)=>{
    setRole(e.target.value);
  }
  
  const Update =  async (name,last_name,inscription,birth,grade,email,role,id) =>{
  
    const result = await edit(name,last_name,inscription,birth,grade,email,role,id)
    setUsers(result)
    console.log(result)
    setModeEdit(false)
  }
  const Delete =  async (id) =>{
     const result = await DeleteUser(id)
     setUsers(result)
  }
  const Active =  async (checked,e,) =>{
         const active = checked
         const result = await ActivateUser(id,active)
         setUsers(result)

  }
  


  return (
    
    <>
    
        {modeEdit ? (
        <>
        <div className="user-card col-lg-4">
         <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <CheckOutlined onClick={()=>Update(name,last_name,inscription,birth,grade,email,role,id)}/>
          ]}
        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={
                <Avatar src={process.env.PUBLIC_URL + '/imgs/user.png'} />
              }
              title={user.name}
            />
          </Skeleton>
          
            <Form {...layout} name="basic" >
              <div className="row">
                <div className="col-md-12">
                   <Form.Item   name="name"
                    rules={[{ required: true, message: 'veuillez saisir le nom!' }]} >
                     <Input  onChange={handleName} defaultValue={name}/>
                   </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item   name="last_name"
                    rules={[{ required: true, message: 'veuillez saisir le prénom!' }]} >
                     <Input placeholder="→  Prénom" onChange={handleLastName} defaultValue={last_name}/>
                 </Form.Item>
                </div>
                <div className="col-md-12">
                    <Form.Item   name="inscription"
                   rules={[{ required: true, message: 'veuillez saisir le numéro inscription!' }]} >
                     <Input  onChange={handleInscription} defaultValue={inscription} />
                   </Form.Item>
                </div>
                <div className="col-md-12">
                <Form.Item  name="grade"
                   rules={[{ required: true, message: 'veuillez saisir votre niveau' }]}>
                    <Select onChange={handleGrade} value={grade} defaultValue={grade}>
                       <Select.Option value="Ancien étudiant">Ancien étudiant</Select.Option>
                       <Select.Option value="Licence">Licence</Select.Option>
                       <Select.Option value="Master">Master</Select.Option>
                       <Select.Option value="Cycle ingénieur">Cycle ingénieur</Select.Option>
                    </Select>
                 </Form.Item>
                </div>
                <div className="col-md-12">
                   <Form.Item   name="email"
                    rules={[{ required: true, message: 'veuillez saisir votre email!' }]} >
                   <Input placeholder="→  Email" onChange={handleEmail} defaultValue={email}/>
                   </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item   name="birth"
                   rules={[{ required: true, message: 'veuillez saisir votre date de naissance!' }]} >
                    <DatePicker onChange={handleBirth}
                     placeholder="→ Date de naissance" defaultValue={moment(birth, dateFormat)}/>     
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item   name="role"
                   rules={[{ required: true, message: 'veuillez saisir le role!' }]} >
                   <Input  onChange={handleRole} defaultValue={role}/>
                  </Form.Item>
                </div>
              </div>
            </Form>
        </Card>
       </div>
        </>
        ) : (
        <>
         <div className="user-card col-lg-4">
         <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <EditOutlined onClick={()=>setModeEdit(true)} />,
            <DeleteOutlined onClick={()=>Delete(id)}/>,
             <Switch  defaultChecked={activeState}  onClick={(checked,e)=>Active(checked,e)}/>
          ]}
        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={
                <Avatar src={process.env.PUBLIC_URL + '/imgs/user.png'} />
              }
              title={user.name}
              
            />             
          </Skeleton>
          
          <ul className="list">
              <li><strong>Nom :</strong> {user.name}</li>
              <li><strong>Prénom : </strong>{user.last_name}</li>
              <li><strong>Numéro Inscription :</strong> {user.inscription_number}</li>
              <li><strong> Niveau : </strong>{user.grade}</li >
              <li><strong>Email : </strong>{user.email}</li>
              <li><strong>Date de naissance :</strong> {user.birth}</li>
              <li><strong>Role :</strong>{user.role}</li>    
            </ul>
        </Card>
         </div>
        </>
        )}
     
     
    </>
   );
}

export default User;
