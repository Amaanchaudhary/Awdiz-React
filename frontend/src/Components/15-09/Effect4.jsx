import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Effect4Func = () => {

    const rout = useNavigate();

    const [Counter1, SetCounter1] = useState(0)
    const [Counter2, SetCounter2] = useState(0)

    useEffect(() => {
        alert("Effect 4 ")
    }, [Counter1, Counter2])//Multiple Dependency
    // Type 4, on initial render and when Counter1 & Counter2 changes
    return (
        // Fragement <> </>  Using this we can able to return multiple divs
        <>
            <div>
                <h1>Effect 4  & Fragments</h1>
                <button onClick={() => rout("/")}>Go to Home</button>
                <h1>1Counter - {Counter1}</h1>
                <h1>2Counter - {Counter2}</h1>
                <button onClick={() => SetCounter1((PreValue1) => PreValue1 + 1)}>1Counter +</button>
                <button onClick={() => SetCounter2((PreValue2) => PreValue2 + 1)}>2Counter +</button>
            </div>
            <div>
                <h2>2nd Div</h2>
            </div>
            <div>
                3rd Div
            </div>
        </>
    )
}

export default Effect4Func;