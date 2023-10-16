import { useState } from "react";

const useCounter = (InitialState = 0) => {

    const [counter , setCounter] = useState(InitialState)

    function Increment(){
        setCounter((val) => val + 1)
    }
    function Decrement(){
        setCounter((val) => val - 1)
    }
    function Reset(){
        setCounter(0)
    }
    return [counter, Increment , Decrement , Reset];
}

export default useCounter;