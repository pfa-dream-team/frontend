import React,{useState,useEffect}from 'react';
import "./List-Cv.css"
import Cv from "../cv/Cv"
import {  Link} from "react-router-dom"
import { LoadingOutlined } from '@ant-design/icons'
import {fetchCvs} from "../../../services/cv.service"





function ListCv({setUser ,user,cookies}) {
  const user_id = user._id
  const [loading , setLoading] = useState(true)
  const [Cvs ,setCvs] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try{
      setLoading(true)
      const result = await fetchCvs()
      setCvs(result)
      setLoading(false)
      }
      catch(e){
        setLoading(false)
      }
    }

    fetchData()
  }, [])


  
  return (
    
    <>
      <div className="sub-page">
        <div className="sub-page-title">
          <p>Liste des cv</p>
          <>
          {user.role === "user" ? (
            <>
            <Link 
             to={location => ({ ...location, pathname: "/user/add-cv/"+user_id })} > 
                Mon Cv 
               
             </Link>{" "}
            </>
          ) :(<> </>)}
          </>
            
          
        </div>
        <div className="block-search">
 
        </div>
        <div className="block-content-list row">
          {loading ? (<>
             <div className="loading" >
               <LoadingOutlined />
             </div>
             </>
             ) : (
             <>
                <div className="row">
                {Cvs.map(cv => (
                      <Cv cv={cv}  user={user}/>
                  ))}
                          
                </div>   
          </>)}
     </div>
      </div>
    </>
   );
}

export default ListCv;
