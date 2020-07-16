import React from 'react';
import "./Cv.css"
import CvDetails from "../cv-details/Cv-Details"
import {  Card, Avatar } from 'antd';
import { NavLink} from "react-router-dom"
import {Route,  useRouteMatch} from "react-router-dom"

function Cv({cv,user}) {
  const { Meta } = Card;
  const id = cv._id;
  let { path } = useRouteMatch()
  const name = cv.name + " "+ cv.last_name
  return (
    
   <>
     
     <div className="cv col-md-4" >
     <NavLink to={ '/user/cvs/'+id } user={user} cv={cv}>
       <Card >
          <Meta
            avatar={
              <Avatar src={process.env.PUBLIC_URL + '/imgs/user.png'} />
            }
            title={name}
            description={cv.position}
          />
       </Card>
      </NavLink>
     </div>
   </>
  );
}

export default Cv;
