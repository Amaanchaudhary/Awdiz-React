import { MdDelete } from "react-icons/md";

const TodoItem = ({todoName , todoDate , onDelete}) => {
    
    return (
        <div className="container">
            <div className="row kg-row justify-content-center">
                <div className="col-4 text-start">{todoName}</div>
                <div className="col-2 text-start">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-btn" onClick={() => onDelete(todoName)}><MdDelete/></button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem