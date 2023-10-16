import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const StateAndEffect = () => {

    const [counter, SetCounter] = useState(0);

    useEffect(() => {
        if(counter == 10){
            toast.success("Counter Reached 10");
        }
    },[counter])

    return (
        <div>
            <h1>State And Effect</h1>
            <p>raise counter till 10</p>
            <h1>Counter - {counter}</h1>
            <button onClick={() => SetCounter((PreVal) => PreVal + 1)}>Counter+</button>
        </div>
    )
}

export default StateAndEffect