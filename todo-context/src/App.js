import AddTodo from "./components/AddTodo";
import Heading from "./components/Heading";
import "./App.css"
import AllTodoItems from "./components/AllTodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./store/todoItemsStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <Heading />
        <AddTodo />
        <WelcomeMsg></WelcomeMsg>
        <AllTodoItems></AllTodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
