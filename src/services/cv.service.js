import Axios from 'axios'

export const AddCv = async (user_id,address,tel,linkedin,facebook) => {
   
      const result = await Axios.post(
        "HTTP://localhost:8000/cv/addCv" ,{user_id,address,tel,linkedin,facebook}
      )
    
        console.log(result.data.cv)
        return result.data
    
  }

export const fetchCvs = async () => {
    const result = await Axios.get(
      "HTTP://localhost:8000/cv/AllCvs",
    )
    console.log(result.data)
    return(result.data)
      
    
  }  