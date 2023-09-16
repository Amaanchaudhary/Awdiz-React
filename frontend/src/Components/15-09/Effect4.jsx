import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Effect4Func = () => {

    const rout = useNavigate();

    const [Counter1, SetCounter1] = useState(0)
    const [Counter2, SetCounter2] = useState(0)

    useEffect(() => {
        alert("Effect 4 ")
    } , [Counter1 , Counter2])
    return (
        <>
            <div>
                <h1>Effect 4</h1>
                <button onClick={() => rout("/")}>Go to Home</button>
                <h1>1Counter - {Counter1}</h1>
                <h1>2Counter - {Counter2}</h1>
                <button onClick={() => SetCounter1((PreValue1) => PreValue1 + 1)}>1Counter +</button>
                <button onClick={() => SetCounter2((PreValue2) => PreValue2 + 1)}>2Counter +</button>
            </div>
            <div>
                <h2>Amaan</h2>
            </div>
            <div>
                3Div
            </div>
        </>
    )
}

export default Effect4Func;