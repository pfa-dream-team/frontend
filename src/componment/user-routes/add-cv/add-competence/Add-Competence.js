import React,{useState}from 'react';
import "../Add-Cv.css"
import "../../cv-details/Cv-Details.css"
import { Form, Input, Button } from 'antd';
import {AddCompetence as AddComp} from "../../../../services/cv.service";



function AddCompetence({setUser ,user,cookies}) {
    const [skill,setSkill] = useState("")
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
    const handleSkill = (e)=>{
        setSkill(e.target.value);
    }
    const addCompetence = async () => {
        const cv_id = user.cv._id
        const result = await AddComp(cv_id,skill)
        user.cv = result;
        cookies.set("user",user,{ path: '/',  expires: 0  })
        setUser(user)
        setCv(user.cv)
        setshowForm(false)
        setSkill("")
  
    }    
  
  return (
            <>
             <div className="information row">
                 <div className="col-md-12">
                   <div className="title">
                    <h3>Compétence</h3>
                   </div>
                 </div>
               <>
               <div className="col-lg-12">
                <div className="study row">
                  {cv !== undefined ? 
                  (<>
                 {cv.competence.map(com => (
                   <>
                     <div className="col-md-1 skill">
                       {com}
                    </div>
                   </>
                  ))}
               </>)

               :(<></>)}
               </div>
               </div>
                 {showForm ? (
                  <>
                  <Form {...layout} name="basic" className="row">
              
                 
                  <div className="col-md-12">
                    <Form.Item   name="skill"
                            rules={[{ required: true, message: "veuillez saisir la description du poste" }]}
                             >
                     <Input 
                          placeholder="→ Ajouter une competence" onChange={handleSkill} value={skill} /> 
                    </Form.Item>
                  </div>
                  <div className="col-md-12">    
                     <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={addCompetence} >
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

export default AddCompetence;
