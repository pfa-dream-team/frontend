import Axios from 'axios'

export const fetchUsers = async () => {
    const result = await Axios.get(
      "HTTP://localhost:8000/users",
    )
    return(result.data)
      
    
  }

export const EditUser = async (name,last_name,inscription,birth,grade,email,role,id) => {
    const result = await Axios.put(
   "HTTP://localhost:8000/users/edit/"+id,{name,last_name,inscription,birth,grade,email,role,id}
   
 )
   console.log("api" ,result.data)
   return result.data
}


export const DeleteUser = async (id) => {
  const result = await Axios.patch(
 "HTTP://localhost:8000/users/delete/"+id
 
)
 console.log("api" ,result.data)
 return result.data
}
export const ActivateUser = async (id,active) => {
  const result = await Axios.patch(
 "HTTP://localhost:8000/users/active/"+id,{id,active}
 
)
 console.log("api" ,result.data)
 return result.data
}