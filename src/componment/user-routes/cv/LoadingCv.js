import React from 'react';
import "./Cv.css"
import { Skeleton, Card, Avatar } from 'antd';

function LoadingCv({setUser ,user,cookies}) {
    const { Meta } = Card;

  return (
    
   <>
     <div className="cv col-md-4" >
     <Card
         
        >
             <Skeleton  avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
     </div>
   </>
  );
}

export default LoadingCv;
