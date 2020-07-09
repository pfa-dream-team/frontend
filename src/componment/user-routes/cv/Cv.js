import React from 'react';
import "./Cv.css"
import {  Card, Avatar } from 'antd';
import { Link} from "react-router-dom"


function Cv({setUser ,user,cookies,cv}) {
  const { Meta } = Card;
  return (
    
   <>
     <div className="cv col-md-4" >
     <Link to={ "/user/cv/1" } >
     <Card >
          <Meta
            avatar={
              <Avatar src={process.env.PUBLIC_URL + '/imgs/user.png'} />
            }
            title="Card title"
            description="This is the description"
          />
      </Card>
              
      </Link>
            
     
     </div>
   </>
  );
}

export default Cv;
