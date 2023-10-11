import { useCallback, useState } from "react";
import Todos from "./Todos";



const UseCallBack = () => {
    const [counter , setCounter]  = useState(0)
    const [todos , setTodos] = useState([]);

    const addCounter = () => {
        setCounter((value) => value + 1)
    }

    const addTodo = useCallback(() => {
        setTodos([...todos,"New todo"])
    },[todos])

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={addCounter} >+counter</button>
            <Todos todos={todos} addTodo={addTodo} />
        </div>
    )
}

export default UseCallBack;