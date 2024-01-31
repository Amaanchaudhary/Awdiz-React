import { useContext, useRef} from "react"
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todoItemsStore";

const AddTodo = () => {

  const {addNewItem} = useContext(TodoItemsContext)

  const todoNameElement = useRef()
  const todoDateElement = useRef()

  const handleAddButton = (event) => {
    event.preventDefault()

    const todoName = todoNameElement.current.value
    const todoDueDate = todoDateElement.current.value

    if (todoName && todoDueDate) {
      addNewItem(todoName, todoDueDate)
      todoNameElement.current.value = ''
      todoDateElement.current.value = ''
      
    }else{
      alert("All Fields are mandatory")
    }
  }
  return (
    <div className="container">
      <form onSubmit={handleAddButton} className="row kg-row justify-content-center">
        <div className="col-4">
          <input type='text' placeholder="Enter Todo here" ref={todoNameElement}  required/>
        </div>
        <div className="col-2 ">
          <input type='date' ref={todoDateElement}  required />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn">
          <IoIosAddCircle /></button>
        </div>
      </form>
    </div>
  )
}
export default AddTodo