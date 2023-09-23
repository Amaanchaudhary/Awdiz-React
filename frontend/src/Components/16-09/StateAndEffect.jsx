import { useState, useEffect } from "react";

const StateAndEffect = () => {

    const [counter, SetCounter] = useState(0);
    useEffect(() => {
        if(counter == 10){
            alert("Counter Reached 10");
        }
    },[counter])

    return (
        <div>
            <h1>State And Effect</h1>
            <h1>Counter - {counter}</h1>
            <button onClick={() => SetCounter((PreVal) => PreVal + 1)}>Counter+</button>
        </div>
    )
}

export default StateAndEffect