import React, { useState } from "react";

function Input (){
    const [text,setText] = useState("")

    const onch = (event)=> {
        const t = event.target.value
        setText(t)
        
    }

    return(
        <div>

            <br></br>
            <from>
                <input onChange={onch} type="text"></input>
            </from>

            <ul>
                <li>useState: {text}</li>
            </ul>
            <br></br>
            <hr></hr>
            
        </div>
        
        
    )

}


export default Input;

