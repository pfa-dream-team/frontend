import React,{useState,useEffect}from 'react';
import "./User.css"
import UserEdit from "./UserEdit"
import { BsPencil,BsCheckAll,BsTrash,BsDashCircle } from "react-icons/bs";


function User({user}) {
    const [modeEdit , setModeEdit] = useState(false)
  
  return (
    
    <>
    
        {modeEdit ? (
        <>
        <UserEdit user={user}/>
        </>
        ) : (
        <>
        <tr>
         <td>{user.name}</td>
         <td>{user.last_name}</td>
         <td>{user.inscription_number}</td>
         <td>{user.grade}</td>
         <td>{user.email}</td>
         <td>{user.birth}</td>
         <td>{user.role}</td>
         <td className="action row">
          <div className="col">
             <button className="edit">
                 <BsPencil/>
             </button>
          </div>
          <div className="col">
          <button  className="activate">
                 <BsCheckAll />
             </button>
          </div>
          <div className="col">
             <button className="banish">
              <BsDashCircle/>
              </button>
          </div>
          <div className="col">
             <button className="delete">
                 <BsTrash/>
             </button>
          </div>
         
        </td>
      </tr>
        </>
        )}
     
     
    </>
   );
}

export default User;
