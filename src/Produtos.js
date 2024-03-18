import React from "react";
import "./produtos.css";
import facebook1 from './img/facebook2.jpg'
import facebook2 from './img/faceook3.jpg'
import facebook3 from './img/facebook 4.jpg'
import facebook4 from './img/facebook5.jpg'

function Produtos() {
  return (
    
    <div className="produtos">
        <div className="card">
          <img src={facebook1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting 
            </p>
          </div>
        </div>

        <div className="card">
          <img src={facebook2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting 
            </p>
          </div>
        </div>

        <div className="card">
          <img src={facebook3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting 
            </p>
          </div>
        </div>

        <div className="card">
          <img src={facebook4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting
            </p>
          </div>
        </div>
      </div>
     
      
    
  );
}

export default Produtos;
