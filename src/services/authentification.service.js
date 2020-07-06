import Axios from 'axios'


export const Authentification = async(username,password) => {
  console.log("here starts")
  /*const result2 = await Axios({
    method: 'PUT',
    url: 'HTTP://localhost:8000/login',
    headers: {
        'Content-Type': 'application/json',
            },
    data: {username,password},
})*/
  const result = await Axios.put(
    "HTTP://localhost:8000/login" ,{username,password},{
      headers: {
        'Content-Type': 'application/json',
      }
    })
  console.log(result)
  return result

  
}