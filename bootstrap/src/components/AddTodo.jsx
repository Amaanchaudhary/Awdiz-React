import { useState } from "react"
import { IoIosAddCircle } from "react-icons/io";

const AddTodo = ({ onNewItem }) => {

  const [todoName, setTodoName] = useState('')
  const [todoDueDate, setTodoDueDate] = useState('')

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }
  const handleDateChange = (event) => {
    setTodoDueDate(event.target.value);
  }

  const handleAddButton = () => {
    if (todoName && todoDueDate) {
      onNewItem(todoName, todoDueDate)
      setTodoName("")
      setTodoDueDate("")
    }else{
      alert("All Fields are mandatory")
    }
  }
  return (
    <div className="container">
      <div className="row kg-row justify-content-center">
        <div className="col-4">
          <input type='text' placeholder="Enter Todo here" onChange={handleNameChange} value={todoName} />
        </div>
        <div className="col-2 ">
          <input type='date' onChange={handleDateChange} value={todoDueDate} required />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-btn" onClick={handleAddButton}>
          <IoIosAddCircle /></button>
        </div>
      </div>
    </div>
  )
}
export default AddTodo