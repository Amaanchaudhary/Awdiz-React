import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

const Effect3Func = () => {

    const rout = useNavigate;
    const [Counter1, SetCounter1] = useState(0)
    const [Counter2, SetCounter2] = useState(0)

    useEffect(() => {
        alert("useEffect 3 - When Counter1 change")
    }, [Counter1])//Dependency

    // Type 3, on initial render and when Counter1 changes

    return (
        <div>
            <h1>useEffect 3 Page</h1>   
            <h1>1Counter - {Counter1}</h1>
            <h1>2Counter - {Counter2}</h1>
            <button onClick={() => rout("/")}>Go to Homepage</button>
            <button onClick={() => SetCounter1((PreVal1) => PreVal1 + 1)}>Counter1 +</button>
            <button onClick={() => SetCounter2((PreVal2) => PreVal2 + 1)}>Counter2 +</button>
        </div>
    )
}

export default Effect3Func