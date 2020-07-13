import React,{useState}from 'react';
import "../Add-Cv.css"
import "../../cv-details/Cv-Details.css"
import "../../cv-details/Cv-Details.css"
import { DatePicker } from 'antd';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';





function AddEducation({setUser ,user,cookies,cv,setCv}) {
    const [diploma,setDiploma] = useState("");
    const [institut,setInstitut] = useState("");
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");
    
    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      };
      const tailLayout = {
        wrapperCol: { offset: 1, span: 24 },
      };
     //change hadelers
     const handleDiploma = (e)=>{
        setDiploma(e.target.value);
    } 
    const handleInstitut = (e)=>{
        setInstitut(e.target.value);
    } 
    const handleStart = (date,dateString)=>{
      setStart(dateString);
    }
    const handleEnd = (date,dateString)=>{
        setEnd(dateString);
      }
    const addEducation = () => {

    }   
  
  return (
            <>
             <div className="information row">
                <div className="col-md-12">
                   <div className="title">
                    <h3>Ajouter votre Education</h3>
                   </div>
                </div>
              <Form {...layout} name="basic" className="row">
                  <div className="col-md-6">
                     <Form.Item   name="diploma"
                            rules={[{ required: true, message: 'veuillez saisir votre nom de diplome' }]} >
                        <Input placeholder="→  Nom diplome" onChange={handleDiploma} value={diploma}/>
                     </Form.Item>
                  </div>
                  <div className="col-md-6">
                     <Form.Item   name="institut"
                            rules={[{ required: true, message: "veuillez saisir votre nom de l'institut" }]} >
                         <Input placeholder="→  Nom institut" onChange={handleInstitut} value={institut}/>
                     </Form.Item>
                  </div>
                  <div className="col-md-6">
                    <Form.Item   name="start"
                            rules={[{ required: true, message: "veuillez saisir la date de début" }]} >
                        <DatePicker 
                               placeholder="→ Date de début" onChange={handleStart} value={start}/> 
                    </Form.Item>
                  </div>
                  <div className="col-md-6">
                    <Form.Item   name="end"
                            rules={[{ required: true, message: "veuillez saisir la date de début" }]}
                             >
                     <DatePicker 
                               placeholder="→ Date de fin" onChange={handleEnd} value={end}/> 
                    </Form.Item>
                  </div>
                  <div className="col-md-12">    
                     <Form.Item>
                        <Button type="primary" htmlType="submit">
                             confirmer
                        </Button>
                      </Form.Item>
                  </div>

             </Form>
              </div>
            </>
             
   );
}

export default AddEducation;
