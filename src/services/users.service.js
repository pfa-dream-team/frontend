import Axios from 'axios'

export const fetchUsers = async () => {
    const result = await Axios.get(
      "HTTP://localhost:8000/users",
    )
    return(result.data)
      
    
  }