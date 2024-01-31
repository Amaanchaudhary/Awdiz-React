import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItemsStore";

const   TodoItem = ({ todoName, todoDate}) => {

    const { delItem } = useContext(TodoItemsContext)

    return (
        <div className="container">
            <div className="row kg-row justify-content-center">
                <div className="col-4 text-start">{todoName}</div>
                <div className="col-2 text-start">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-btn" onClick={() => delItem(todoName)}><MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem