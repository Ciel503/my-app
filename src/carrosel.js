import React from "react"
import imgCarrocel1 from './img/67237842_527709764434294_2540082481063788544_n.jpg'
import imgCarrocel2 from './img/b6e123ea85fe78d1b67163cfa82e008e.jpg'
import imgCarrocel3 from './img/252303670_1085944931944105_4348121466635720555_n.jpg'
import './carrocel.css'
function Carrosel() {
    return(

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="imgCarrocel" src={imgCarrocel1} alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img className="imgCarrocel" src={imgCarrocel2}  alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img className="imgCarrocel" src={imgCarrocel3} alt="..." />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
      
        
    )
}

export default Carrosel;