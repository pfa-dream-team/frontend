import React,{useState}from 'react';
import "../Add-Cv.css"
import "../../cv-details/Cv-Details.css"
import { DatePicker } from 'antd';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { MdSchool } from "react-icons/md";
import {AddEducation as AddEdu} from "../../../../services/cv.service"




function AddEducation({setUser ,user,cookies}) {
    const [diploma,setDiploma] = useState("");
    const [institut,setInstitut] = useState("");
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");
    const [cv,setCv] = useState(user.cv)
    const [showForm ,setshowForm] = useState(false)
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
    const addEducation = async () => {
      const cv_id = user.cv._id
      const result = await AddEdu(cv_id,diploma,institut,start,end)
      user.cv = result;
      cookies.set("user",user,{ path: '/',  expires: 0  })
      setUser(user)
      setCv(user.cv)
      setshowForm(false)

    }   
  
  return (
            <>
             <div className="information row">
                 <div className="col-md-12">
                   <div className="title">
                    <h3>Education</h3>
                   </div>
                 </div>
               <>
               {cv !== undefined ? 
               (<>
               {cv.eductaion.map(edu => (
                      <>
                      <div className="col-lg-12">
                        <div className="study">
                           <p><MdSchool/> &nbsp; {edu.diploma} </p>
                            <ul>
                              <li>
                                 Période :  {edu.start} - {edu.end}
                              </li>
                              <li>
                                 Nom de l'institut : {edu.institut} 
                              </li>
                            </ul>
                        </div>
                      </div>
                   </>
                  ))}
               </>)
               :(<></>)}
                 {showForm ? (
                  <>
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
                               placeholder="→ Date de début" onChange={handleStart} value={start} picker="year"/> 
                    </Form.Item>
                  </div>
                  <div className="col-md-6">
                    <Form.Item   name="end"
                            rules={[{ required: true, message: "veuillez saisir la date de début" }]}
                             >
                     <DatePicker 
                               placeholder="→ Date de fin" onChange={handleEnd} value={end} picker="year"/> 
                    </Form.Item>
                  </div>
                  <div className="col-md-12">    
                     <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={addEducation} >
                             confirmer
                        </Button>
                      </Form.Item>
                  </div>
                 </Form>
                  </>
                  ) : (
                  <>
                  </>
                  )}
                
                <div className="add-more col-md-12">
                   <Button type="dashed" onClick={()=>setshowForm(true)}>Ajouter Education</Button>
                </div>
               </>
            

            </div>

            </>
             
   );
}

export default AddEducation;
