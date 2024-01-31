import { createContext, useReducer } from "react"

export const TodoItemsContext = createContext({
    todoitem: [],
    addNewItem: () => { },
    delItem: () => { }
})

const reducer = (currTodoItem, action) => {

    let newTodoItemm = currTodoItem

    if (action.type === 'NEW_ITEM') {
        newTodoItemm = [...currTodoItem,
        { Name: action.payload.itemName, dueDate: action.payload.itemDueDate }]
    }
    else if (action.type === 'DEL_ITEM') {
        newTodoItemm = currTodoItem.filter((item) => item.Name !== action.payload.itemName)
    }
    return newTodoItemm
}

const TodoItemsContextProvider = ({ children }) => {
    const [todoitem, dispatchItems] = useReducer(reducer, [])

    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = { type: "NEW_ITEM", payload: { itemName, itemDueDate } }
        dispatchItems(newItemAction)

        // setTodoItem((curValue) => [...curValue, { Name: itemName, dueDate: itemDueDate }])
    }

    const delItem = (todoItemName) => {

        const delItemAction = { type: "DEL_ITEM", payload: { itemName: todoItemName } }
        dispatchItems(delItemAction)
    }

    return (
        <TodoItemsContext.Provider value={{ todoitem, addNewItem, delItem }}>
            {children}
        </TodoItemsContext.Provider>
    )
}

export default TodoItemsContextProvider
