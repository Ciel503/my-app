import React,{useState} from "react";


function Conter(props) {
    const [cont,setCont] = useState(0)
    function add() {
        setCont(cont+1)
        
    }
    

    return(
        <div>
            <h1>Conter: {cont}</h1>
            <button onClick={add}>click</button>

            <br></br>
            <br></br>

            <hr></hr>
        </div>
        
    )
}

export default Conter;