import React from 'react';
import "./Document.css"
import { Skeleton, Card, Avatar } from 'antd';

function DocumentLoading() {
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

export default DocumentLoading;
