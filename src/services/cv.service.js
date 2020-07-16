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