import React,{useState,useEffect}from 'react';
import Document from "../document/Document"
import "./List-Document.css"
import { LoadingOutlined } from '@ant-design/icons'
import {fetchDocuments,AddDocument} from "../../../services/document.service"
import { Form, Input, Button, Checkbox } from 'antd';
import { Select, Radio } from 'antd';

const { Option } = Select;
const { TextArea } = Input;



function ListDocument({setUser ,user,cookies}) {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const [loading , setLoading] = useState(false)
  const [showForm , setShowForm] = useState(false)
  const [name , setName] = useState("")
  const [url , setUrl] = useState("")
  const [description , setDescription] = useState("")
  const [cible , setCible] = useState([])
 
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

  const user_id = user._id
  const [Documents ,setDocuments] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try{
      setLoading(true)
      const result = await fetchDocuments()
      setDocuments(result)
      setLoading(false)
      }
      catch(e){
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  const AddDoc =  async () => {
    setLoading(true)
    const user_id = user._id
    const result = await AddDocument(user_id,name,url,description,cible)
    setDocuments(result)
    setShowForm(false)
    setLoading(false)
}    
  return (
    
    <>
      <div className="sub-page">
        <div className="sub-page-title">
          <p>Liste des Documents {user.name}</p>
          <button className="add-doc" onClick={()=>setShowForm(true)}> 
                Ajouter document
         </button>
        </div>
        {showForm ? (
        <>
         <div className="block-add-doc row">
          <div className="form">
            <Form {...layout} name="basic" initialValues={{ remember: true }} className="row">
              <div className="col-md-6 input-form">
                <Form.Item   name="name"
                 rules={[{ required: true, message: 'veuillez saisir le nom du document!' }]} >
                  <Input placeholder="→  Name" onChange={handleName} value={name}/>
                </Form.Item>
              </div>
              <div className="col-md-6 input-form">
                <Form.Item   name="url"
                 rules={[{ required: true, message: "veuillez saisir l'url du document!" }]} >
                  <Input placeholder="→  Url" onChange={handleUrl} value={url}/>
                </Form.Item>
              </div>
              <div className="col-md-6 input-form">
                <Form.Item   name="cible"
                 rules={[{ required: true, message: "veuillez saisir les cibles du document!" }]} >
                    <Select
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
              <div className="col-md-6 input-form">
                <Form.Item   name="description"
                 rules={[{ required: true, message: "veuillez saisir le description du document!" }]} >
                    <TextArea 
                            placeholder="→ Ajouter le description" 
                            onChange={handleDescription} value={description} /> 
                </Form.Item>
              </div>
            </Form>
          </div>
          <div className="col-md-12 input-form flex">
                <button className="btn-form btn-2 " onClick={AddDoc}>submit</button>
          </div>
        </div>
        
        </>
        ) : (
        <>
         
        </>)}
       
        <div className="block-content-list row">
          {loading ? (<>
            <div className="loading" >
               <LoadingOutlined />
             </div>
          </>) : (<>
            <div className="row">
                {Documents.map(document => (
                      <Document document={document}  user={user} setDocuments={setDocuments}/>
                  ))}
                          
                </div>  
          </>)}
     </div>
      </div>
    </>
   );

}

export default ListDocument;



