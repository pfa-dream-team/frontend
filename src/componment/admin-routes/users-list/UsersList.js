import React,{useState,useEffect}from 'react';
import "./UserList.css"
import User from "../user/User"
import { LoadingOutlined } from '@ant-design/icons';
import {fetchUsers,EditUser,DeleteUser,ActivateUser } from "../../../services/users.service"



function UsersList({setUser ,user,cookies}) {
  const [loading , setLoading] = useState(false)
  const [error, setError]=useState("")
  const [users, setUsers] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try{
      setLoading(true)
     
      const result = await fetchUsers()
      setUsers(result)
      setLoading(false)
      }
      catch(e){
        setLoading(false)
        setError("Un erreur s'est produits")
      }
    }

    fetchData()
  }, [])


  
  return (
    
    <>
      <div className="sub-page">
        <div className="sub-page-title">
          <p>Liste des utilisateurs</p>
        
        </div>
        <div className="block-search">
 
        </div>
        <div className="block-content-list row">
          {loading ? (<>
             <div className="loading" >
               <LoadingOutlined />
             </div>
          </>) : (<>
             {!error === "" ?
              (
              <>
                <div className="error">
                   <img src={process.env.PUBLIC_URL + '/imgs/error.png'} alt="login img"/>
                   <p>Ooops un erreur s'est produit !</p>
                </div>
              </>
              ) : (
              <>
                <div class="row">
                
                     <>
                        {users.map(user => (
                          <User user={user} edit={EditUser} setUsers={setUsers} DeleteUser={DeleteUser} ActivateUser={ActivateUser}/>
                       ))}
                          
                      </>
                      
                    
                  </div>          
              </>
              )}
           
           
          </>)}
     </div>
      </div>
    </>
   );
}

export default UsersList;
