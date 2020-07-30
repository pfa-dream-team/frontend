import React,{useState,useEffect} from 'react';
import { LoadingOutlined } from '@ant-design/icons'
import "../list-cv/List-Cv.css"





function MainPage({setUser ,user,cookies}) {
  const [loading , setLoading] = useState(false)
  
  return (
    
    <>
    <div className="sub-page">
      <div className="sub-page-title">
        <p>Voir les nouveautés</p>
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
           <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      ama
    </div>
    <div className="carousel-item">
      amamma
    </div>

  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
                 
        </>)}
   </div>
    </div>
  </>
  );
}

export default MainPage;
