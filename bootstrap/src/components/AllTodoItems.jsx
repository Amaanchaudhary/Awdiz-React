import TodoItem from "./TodoItem"

const AllTodoItems = ({ todoItems , onDelete }) => {

    return <>
        <div>
            {todoItems.map((item) => (
                <TodoItem key={item.Name} todoName={item.Name} todoDate={item.dueDate} onDelete={onDelete}></TodoItem>
            ))}
        </div>
    </>

}

export default AllTodoItems