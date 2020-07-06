import Axios from 'axios'


export const Authentification = async(email,password) => {
  console.log("here starts")

    try {
      const result = await Axios.put(
        "http://localhost:8000/login" ,{email,password},{
          headers: {
            'Content-Type': 'application/json',
          }
        })
        if (result.data === undefined){
          return 0
        }else{
          return result.data
        }
      
    } catch (error) {
      console.error(error)
    }
  
}