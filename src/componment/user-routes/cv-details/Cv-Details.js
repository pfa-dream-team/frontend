import React,{ useEffect, useState }from 'react';
import "./Cv-Details.css"
import Contact from "./cv-fields/Contact"
import Education from "./cv-fields/Education"
import Experience from "./cv-fields/Experience"
import Skills from "./cv-fields/Skills"
import { useParams } from "react-router-dom"
import {FetchCv} from "../../../services/cv.service"
import Cv from '../cv/Cv'
import { LoadingOutlined } from '@ant-design/icons'






function CvDetails() {
  const [loading , setLoading] = useState(false)
  const [cv , setCv] = useState({});
  const [education ,setEducation] = useState([]);
  const [experience ,setExperience] = useState([]);
  const [skills ,setSkills] = useState([]);

  const { cv_id } = useParams();

  useEffect(() => {
    const fetchCv = async () => {
      setLoading(true)
      const result = await FetchCv(cv_id)
        setCv(result)
        setEducation(result.eductaion)
        setExperience(result.experience)
        setSkills(result.competence)
        setLoading(false)  
    }
    
    fetchCv()
  }, [cv_id])

  return (
    
   <>
     <div className="cv-detailed col-md-12" >
     {loading ? (<>
             <div className="loading" >
               <LoadingOutlined />
             </div>
             </>
             ) : (
             <>
               <div className="cv-header">
                  <h3>{cv.name}  {cv.last_name}</h3>
                  <p>{cv.position}</p>
                 <span className="break"></span>
               </div>
               <div className="cv-content">
                   <Contact cv={cv}/>
                  <Education education={education}/>
                  <Experience experience={experience}/>
               </div>
               <div className="cv-footer">
                 <Skills skills={skills}/>
               </div>  
          </>)}
        
     </div>
   </>
  );
}

export default CvDetails;
