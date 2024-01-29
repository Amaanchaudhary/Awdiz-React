import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions 
export default counterSlice