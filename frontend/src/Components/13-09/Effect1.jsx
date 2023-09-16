import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Effect1Func = () => {

    const rout = useNavigate()
    
    const [Counter , SetCounter] = useState(0);
    
    useEffect(() => {
        alert("Page Rendered");
    })

    //it'll execute the function on every render and render causes bcoz of first render, reload and state change

    return(
        <div>
            <h1>useEffect 1 Page</h1>
            <h1>{Counter}</h1>
            <button onClick={() => rout("/")}>Goto Homepage</button>
            <button onClick={() => SetCounter((PreVal) => PreVal + 1)}>Counter+</button>
        </div>
    )

}

export default Effect1Func;