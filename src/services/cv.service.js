import Axios from 'axios'

export const AddCv = async (user_id,address,tel,linkedin,facebook,position) => {
   
      const result = await Axios.post(
        "HTTP://localhost:8000/cv/addCv" ,{user_id,address,tel,linkedin,facebook,position}
      )
    
        return result.data
    
}

export const fetchCvs = async () => {
    const result = await Axios.get(
      "HTTP://localhost:8000/cv/AllCvs",
    )
    return(result.data)
      
    
}  

export const FetchCv = async (cv_id) => {
    const result = await Axios.get(
      "HTTP://localhost:8000/cv/getCv/"+cv_id,
    )
    return(result.data)
      
    
}  

export const AddEducation = async (cv_id,diploma,institut,start,end) => {
    console.log("here starts")
    const result = await Axios.post(
      "HTTP://localhost:8000/education/addEducation",{cv_id,diploma,institut,start,end}
    )
      console.log("here ends" ,result.data)
      return result.data
  
}

export const AddExperience = async (cv_id,position,agency,start,end,description) => {
  console.log("here starts")
  const result = await Axios.post(
    "HTTP://localhost:8000/experience/addExperience",{cv_id,position,agency,start,end,description}
  )
    console.log("here ends" ,result.data)
    return result.data

}
export const AddCompetence = async (cv_id,skill) => {
  console.log("here starts")
  const result = await Axios.post(
    "HTTP://localhost:8000/cv/addCompetence",{cv_id,skill}
  )
    console.log("here ends" ,result.data)
    return result.data

}