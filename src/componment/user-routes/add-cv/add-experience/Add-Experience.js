import React,{useState}from 'react';
import "../Add-Cv.css"
import "../../cv-details/Cv-Details.css"
import { DatePicker } from 'antd';
import { Form, Input, Button } from 'antd';
import { MdSchool } from "react-icons/md";
import {AddExperience as AddExp} from "../../../../services/cv.service";
import { MdWork } from "react-icons/md";
const { TextArea } = Input;



function AddExperience({setUser ,user,cookies}) {
    const [position,setPosition] = useState("")
    const [agency,setAgency] = useState("")
    const [start,setStart] = useState("")
    const [end,setEnd] = useState("")
    const [description,setDescription] = useState("")
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
     const handlePositon = (e)=>{
        setPosition(e.target.value);
    } 
    const handleAgency = (e)=>{
        setAgency(e.target.value);
    } 
    const handleStart = (date,dateString)=>{
      setStart(dateString);
    }
    const handleEnd = (date,dateString)=>{
        setEnd(dateString);
    }
    const handleDescription = (e)=>{
        setDescription(e.target.value);
    }
    const addExperience = async () => {
        const cv_id = user.cv._id
        const result = await AddExp(cv_id,position,agency,start,end,description)
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
                    <h3>Experience</h3>
                   </div>
                 </div>
               <>
               {cv !== null ? 
               (<>
               {cv.experience.map(exp => (
                      <>
                 <div className="col-lg-12">
                    <div className="study">
                      <p><MdWork/> &nbsp; {exp.position}</p>
                       <ul>
                         <li>
                            Prériode : {exp.start} - {exp.end}
                         </li>
                         <li className="agency-name">
                             Société : {exp.agency}
                         </li>
                         <li className="work-description">
                         Description du poste : {exp.description}
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
                     <Form.Item   name="position"
                            rules={[{ required: true, message: 'veuillez saisir votre poste' }]} >
                        <Input placeholder="→  Nom positoon" onChange={handlePositon} value={position}/>
                     </Form.Item>
                  </div>
                  <div className="col-md-6">
                     <Form.Item   name="agency"
                            rules={[{ required: true, message: "veuillez saisir le nom de l'organisme" }]} >
                         <Input placeholder="→  Nom de l'agence" onChange={handleAgency} value={agency}/>
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
                    <Form.Item   name="description"
                            rules={[{ required: true, message: "veuillez saisir la description du poste" }]}
                             >
                     <TextArea 
                               placeholder="→ Ajouter votre description" onChange={handleDescription} value={description} /> 
                    </Form.Item>
                  </div>
                  <div className="col-md-12">    
                     <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={addExperience} >
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
                   <Button type="dashed" onClick={()=>setshowForm(true)}>Ajouter Experience</Button>
                </div>
               </>
            

            </div>

            </>
             
   );
}

export default AddExperience;
