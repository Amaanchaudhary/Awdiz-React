import { configureStore, createSlice } from '@reduxjs/toolkit'
//step 1 : import configureStore from @reduxjs/toolkit 

const counterSlice = createSlice({     //step 3: Create Slices and give name,
    name: 'Counter',                  //initialstate and reducer methods
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--
        },
        add: (state, action) => {
            state.counterVal += Number(action.payload)
        },
        substract: (state, action) => {
            state.counterVal -= Number(action.payload.num)
        }
    }
})

//step 2 create instance of configureStore And map all slices of reducer in it
const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
}) 

export const counterActions = counterSlice.actions  //step 5 : export slices of actions
export default counterStore     //step 4: export store so it can be accesible to all

//step 6 : main index.js 





// const initialialValue = {       //step 4 : create initial value
//     counter: 0,
//     privacy: false
// }

/*
//Step 3: Create Reducer and pass initialVal and action
const counterReducer = (store = initialialValue, action) => {
    // console.log("action recieved" , action)  

    if (action.type == 'INCREMENT') {          //give actions based on action.type
        return { ...store, counter: store.counter + 1 }  //and return it
    }
    else if (action.type == 'DECREMENT') {
        return { ...store, counter: store.counter - 1 }
    }
    else if (action.type == 'ADD') {
        return { ...store, counter: store.counter + Number(action.payload.num) }
    }
    else if (action.type == 'SUBSTRACT') {
        return { ...store, counter: store.counter - Number(action.payload.num) }
    }
    else if (action.type == 'PRIVACY') {
        return { ...store, privacy: !store.privacy }
    }
    return store
}
*/