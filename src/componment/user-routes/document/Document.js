import React from 'react';
import "./Document.css"
import {  Card, Avatar } from 'antd';


function Cv({setUser ,user,cookies,cv}) {
  const { Meta } = Card;
  return (
    
   <>
     <div className="cv col-md-4" >
     <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
     <Card >
          <Meta
            avatar={
              <Avatar src={process.env.PUBLIC_URL + '/imgs/file.png'} />
            }
            title="Card title"
            description="This is the description"
          />
      </Card>
              
      </a>
            
     
     </div>
   </>
  );
}

export default Cv;
