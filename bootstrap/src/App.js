import AddTodo from "./components/AddTodo";
import Heading from "./components/Heading";
import "./App.css"
import AllTodoItems from "./components/AllTodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  const [todoitem, setTodoItem] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems =
      [...todoitem,
      { Name:  itemName , dueDate:  itemDueDate }
      ];
      setTodoItem(newTodoItems)
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
