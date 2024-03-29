import { useRef} from "react"
import { IoIosAddCircle } from "react-icons/io";

const AddTodo = ({ onNewItem }) => {

  // const [todoName, setTodoName] = useState('')  //no need because we have useRef which donot cause rerender after each value change
  // const [todoDueDate, setTodoDueDate] = useState('')
  // const noOfUpdates = useRef(0)  //simple useCase of useRef
  const todoNameElement = useRef()
  const todoDateElement = useRef()


  // const handleNameChange = (event) => {     //no need because we have useRef
  //   setTodoName(event.target.value);
  //   // noOfUpdates.current += 1            //simple useCase of useRef
  // }

  // const handleDateChange = (event) => {     //no need because we have useRef
  //   setTodoDueDate(event.target.value);
  //   // console.log(noOfUpdates.current)     //simple useCase of useRef
  // }

  const handleAddButton = (event) => {
    event.preventDefault()
    const todoName = todoNameElement.current.value
    const todoDueDate = todoDateElement.current.value
    if (todoName && todoDueDate) {
      onNewItem(todoName, todoDueDate)
      todoNameElement.current.value = ''
      todoDateElement.current.value = ''
      // setTodoName("")                        //no need because we have useRef
      // setTodoDueDate("")                     //no need because we have useRef
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