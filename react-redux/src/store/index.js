import {createStore} from 'redux'

const initialialValue = {
    counter : 0
}

const counterReducer = (store = initialialValue , action) => {
    // console.log("action recieved" , action)

    const newStore = store

    if(action.type == 'INCREMENT'){
        return {counter : store.counter + 1}
    }
    else if(action.type == 'DECREMENT'){
        return {counter : store.counter - 1}
    }
    return store
}

const counterStore = createStore(counterReducer)

export default counterStore