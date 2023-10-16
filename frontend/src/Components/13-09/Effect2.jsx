import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Effect2Func = () => {

    const rout = useNavigate()

    const [Counter, SetCounter] = useState(0);

    useEffect(() => {
        // alert("UseEffect2")
        toast.success("Page Rendered")
    }, [])

    //useEffect 2nd type, it'll execute the code only on first render of component.

    const Increment = () => {
        SetCounter((PreVal) => PreVal + 1)
    }
    
    return (
        <div>
            <h1>useEffect 2 Page</h1>
            <h1>{Counter}</h1>
            <button onClick={() => rout("/")}>Goto Homepage</button>
            <button onClick={Increment}>+</button>
        </div>
    )

}

export { Effect2Func };