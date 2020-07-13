import React,{useState,useEffect}from 'react';
import "./User.css"
import { DatePicker } from 'antd'
import { Form, Input, Select,  AutoComplete} from 'antd'
import { BsPencil,BsCheckAll,BsTrash,BsDashCircle } from "react-icons/bs"
import moment from 'moment';


function UserEdit({user}) {
  const dateFormat = 'YYYY-MM-DD';
  const [name , setName] = useState(user.name);
  const [last_name , setLastName] = useState(user.last_name);
  const [inscription , setInscription] = useState(user.inscription_number);
  const [birth , setBirth] = useState(user.birth);
  const [grade , setGrade] = useState(user.grade);
  const [email , setEmail] = useState(user.email);
  const [role , setRole] = useState(user.role);

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
  
  
  return (
    
    <>
    <tr>
      <td>
        <Form.Item   name="name"
                 rules={[{ required: true, message: 'veuillez saisir le nom!' }]} >
                   <Input  onChange={handleName} defaultValue={name}/>
        </Form.Item>
      </td>
      <td>
        <Form.Item   name="last_name"
                 rules={[{ required: true, message: 'veuillez saisir le prénom!' }]} >
                   <Input placeholder="→  Prénom" onChange={handleLastName} defaultValue={last_name}/>
        </Form.Item>
      </td>
      <td>
         <Form.Item   name="inscription"
                 rules={[{ required: true, message: 'veuillez saisir le numéro inscription!' }]} >
                   <Input  onChange={handleInscription} defaultValue={inscription} />
         </Form.Item>
      </td>
      <td>
        <Form.Item  name="grade"
                   rules={[{ required: true, message: 'veuillez saisir votre niveau' }]}>
                    <Select onChange={handleGrade} value={grade} defaultValue={grade}>
                       <Select.Option value="Ancien étudiant">Ancien étudiant</Select.Option>
                       <Select.Option value="Licence">Licence</Select.Option>
                       <Select.Option value="Master">Master</Select.Option>
                       <Select.Option value="Cycle ingénieur">Cycle ingénieur</Select.Option>
                    </Select>
         </Form.Item>
      </td>
      <td>
        <Form.Item   name="email"
                  rules={[{ required: true, message: 'veuillez saisir votre email!' }]} >
                 <Input placeholder="→  Email" onChange={handleEmail} defaultValue={email}/>
        </Form.Item>
      </td>
      <td>
         <Form.Item   name="birth"
                   rules={[{ required: true, message: 'veuillez saisir votre date de naissance!' }]} >
                    <DatePicker onChange={handleBirth}
                     placeholder="→ Date de naissance" defaultValue={moment(birth, dateFormat)}/>     
         </Form.Item>
      </td>
      <td>
        <Form.Item   name="role"
                 rules={[{ required: true, message: 'veuillez saisir le role!' }]} >
                   <Input  onChange={handleRole} defaultValue={role}/>
        </Form.Item>
      </td>
      <td className="action row">
          <div className="col">
             <button className="edit">
                 <BsPencil/>
             </button>
          </div>
          <div className="col">
          <button  className="activate">
                 <BsCheckAll />
             </button>
          </div>
          <div className="col">
             <button className="banish">
              <BsDashCircle/>
              </button>
          </div>
          <div className="col">
             <button className="delete">
                 <BsTrash/>
             </button>
          </div>
         
      </td>
    </tr>
     
    </>
   );
}

export default UserEdit;
