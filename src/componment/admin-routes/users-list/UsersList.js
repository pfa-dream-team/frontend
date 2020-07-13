import React,{useState,useEffect}from 'react';
import "./UserList.css"
import User from "../user/User"
import { LoadingOutlined } from '@ant-design/icons';
import {fetchUsers } from "../../../services/users.service"



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
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                       <th scope="col">Nom</th>
                       <th scope="col">Prénom</th>
                       <th scope="col">Num inscription</th>
                       <th scope="col">Niveau</th>
                       <th scope="col">Email</th>
                       <th scope="col">Date de naissance</th>
                       <th scope="col">Role</th>
                       <th scope="col">Action</th>
                      </tr>
                      </thead>
                     <tbody>
                     {users.map(user => (
                      <User user={user}/>
                      ))}
                     </tbody>
                
                    </table>
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
