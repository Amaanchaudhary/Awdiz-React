import { useContext } from "react"
import { TodoItemsContext } from "../store/todoItemsStore"

const WelcomeMsg = () => {

    const {todoitem} = useContext(TodoItemsContext)

    return !todoitem?.length && <h2>No Task! Enjoy Your Day</h2>
}

export default WelcomeMsg