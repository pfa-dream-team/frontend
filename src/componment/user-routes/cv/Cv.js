import React from 'react';
import "./Cv.css"
import {  Card, Avatar } from 'antd';
import { NavLink} from "react-router-dom"


function Cv({cv,user}) {
  const { Meta } = Card;
  const id = user._id
  return (
    
   <>
     <div className="cv col-md-4" >
     <NavLink to={ '/user/cv/'+id } user={user} cv={cv}>
       <Card >
          <Meta
            avatar={
              <Avatar src={process.env.PUBLIC_URL + '/imgs/user.png'} />
            }
            title="Card title"
            description="This is the description"
          />
       </Card>
      </NavLink>
     </div>
   </>
  );
}

export default Cv;
