import { TodoItemsContext } from "../store/todoItemsStore"
import { useContext } from "react"
import TodoItem from "./TodoItem"

const AllTodoItems = () => {

    const { todoitem } = useContext(TodoItemsContext)

    return <>
        <div>
            {todoitem?.map((item) => (
                <TodoItem key={item.Name} todoName={item.Name} todoDate={item.dueDate}></TodoItem>
            ))}
        </div>
    </>

}

export default AllTodoItems