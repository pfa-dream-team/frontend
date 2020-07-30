import Axios from 'axios'



export const fetchDocuments = async () => {
    const result = await Axios.get(
      "HTTP://localhost:8000/document/allDocuments",
    )
    return(result.data)
}  


export const AddDocument = async (user_id,name,url,description,cible) => {
   
  const result = await Axios.post(
    "HTTP://localhost:8000/document/addDocument" ,{user_id,name,url,description,cible}
  )

    return result.data

} 
export const Edit = async (id,name,url,description,cible)=> {
  const result = await Axios.patch(
 "HTTP://localhost:8000/document/editDocument/"+id,{name,url,description,cible}
 
)
 return result.data
}


export const Delete = async (id) => {
const result = await Axios.delete(
"HTTP://localhost:8000/document/deleteDocument/"+id

)
return result.data
}
export const allUserDocuments = async (id) => {
  const result = await Axios.get(
  "HTTP://localhost:8000/document/allUserDocuments/"+id
  
  )
  console.log(result.data)
  return result.data
  }