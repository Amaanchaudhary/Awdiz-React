import AddTodo from "./components/AddTodo";
import Heading from "./components/Heading";
import "./App.css"
import AllTodoItems from "./components/AllTodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  const [todoitem, setTodoItem] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {

    // setTodoItem((curValue) => {     //aise karne se react hamesha aapko up to date value dega
    //   const newTodoItems =          //qk possible hai k jab aap ise update krre ho previous value update na hui ho
    //     [...curValue,                                //same kaam karra hai jo niche func hai
    //     { Name: itemName, dueDate: itemDueDate }
    //     ];
    //     return newTodoItems
    // })
//                             current value ke basis par new value banara hai
    setTodoItem((curValue) => [...curValue,{ Name: itemName, dueDate: itemDueDate }])


  }

  const handleDelItem = (todoItemName) => {
    const newTodoItemm = todoitem.filter((item) => item.Name != todoItemName)
    setTodoItem(newTodoItemm)
  }

  return (
    <center className="todo-container">
      <Heading />
      <AddTodo onNewItem={handleNewItem} />
      {todoitem.length == 0 && <WelcomeMsg></WelcomeMsg>}
      <AllTodoItems todoItems={todoitem} onDelete={handleDelItem}></AllTodoItems>
    </center>
  );
}

export default App;
