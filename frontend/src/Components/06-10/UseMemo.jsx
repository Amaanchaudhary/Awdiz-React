import { useMemo, useState } from "react";

const UseMemo = () => {

    const [Counter, SetCounter] = useState(0);
    const [todos , setTodos]  = useState([]);

    function addTodos(){
        setTodos([...todos, "New todos"])
    }

    // const lenghtyCalculation = calculation(Counter);

    const lenghtyCalculation = useMemo(() => calculation(Counter),[Counter])

    return (
        <div>
            <h1>Lenghty Calculation = {lenghtyCalculation}</h1>
            <h1>Counter - {Counter}</h1>
            <button onClick={() => SetCounter((preVal) => preVal + 1)} >Counter+</button><br/>
            <button onClick={addTodos}>Add todo</button>
            {todos.map((todo) => (
                <div>{todo}</div>
            ))}
        </div>
    )
}

const calculation = (Counter) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++)
        Counter += 1;
    return Counter; 
}

export default UseMemo;