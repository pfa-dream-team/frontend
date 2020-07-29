import React, { useState } from 'react';
import "./Document.css"
import {   Skeleton, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { DeleteOutlined,CheckOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';
import { Select, Radio } from 'antd';
import {fetchDocuments,AddDocument,Edit,Delete} from "../../../services/document.service"


const { Option } = Select;
const { TextArea } = Input;



function Document({user,document,setDocuments}) {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const { Meta } = Card;
  const [ModeEdit,setModeEdit] = useState(false)
  const [name , setName] = useState(document.name)
  const [url , setUrl] = useState(document.url)
  const [description , setDescription] = useState(document.description)
  const [cible , setCible] = useState(document.cible)
 
  const handleName = (e) =>{
    setName(e.target.value)
  }
  const handleUrl = (e) =>{
    setUrl(e.target.value)
  }
  const handleDescription = (e) =>{
    setDescription(e.target.value)
  }
  const handleCible = (value) =>{
    setCible(value)
  }
  const Update =  async () =>{
    const id = document._id
    const result = await Edit(id,name,url,description,cible)
    setDocuments(result)
    setModeEdit(false)
  }
  const DeleteDoc =  async () =>{
     const id = document._id
     const result = await Delete(id)
     setDocuments(result)
  }
  return (
    
   <>
     <div className="cv col-md-4" >
    
     {user.role === "admin" ? (<>
      {ModeEdit ? (
      <>
       <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[
              <CheckOutlined onClick={()=>Update()}/>
             ]}
          >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={
                <Avatar src={process.env.PUBLIC_URL + '/imgs/file.png'} />
              }
              title={document.name}
            />
          </Skeleton>
          <Form {...layout} name="basic" initialValues={{ remember: true }} className="row">
              <div className="col-md-12 input-form">
                <Form.Item   name="name"
                 rules={[{ required: true, message: 'veuillez saisir le nom du document!' }]} >
                  <Input placeholder="→  Name" onChange={handleName} defaultValue={name}/>
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
                <Form.Item   name="url"
                 rules={[{ required: true, message: "veuillez saisir l'url du document!" }]} >
                  <Input placeholder="→  Url" onChange={handleUrl} defaultValue={url}/>
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
                <Form.Item   name="cible"
                 rules={[{ required: true, message: "veuillez saisir les cibles du document!" }]} >
                    <Select
                       defaultValue={cible}
                       mode="multiple"
                       placeholder="→  Cible"
                       onChange={handleCible}
                       style={{ width: '100%' }}
                          >
                        <Option value="im">IM</Option>
                        <Option value="cm">CM</Option>
                        <Option value="av">AV</Option>
                        <Option value="3d">3D</Option>

                       </Select>
                </Form.Item>
              </div>
              <div className="col-md-12 input-form">
                <Form.Item   name="description"
                 rules={[{ required: true, message: "veuillez saisir le description du document!" }]} >
                    <TextArea 
                            placeholder="→ Ajouter le description" 
                            onChange={handleDescription} defaultValue={description}/> 
                </Form.Item>
              </div>
            </Form>
        </Card>
      </>
      ) : (
      <>
       <Card  actions={[
          <EditOutlined onClick={()=>setModeEdit(true)} />,
          <DeleteOutlined onClick={()=>DeleteDoc()}/>
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
      </>
      )}
     
     
     </>) :(<>
      <Card   actions={[
           <a href={document.url} target="_blank" rel="noopener noreferrer">
           allez vers le lien
         </a>
          ]} >
          <Meta
            avatar={
              <Avatar src={process.env.PUBLIC_URL + '/imgs/file.png'} />
            }
            title={document.name}
            description={document.description}
          />
      </Card></>)}
    
              

            
     
     </div>
   </>
  );
}

export default Document;
