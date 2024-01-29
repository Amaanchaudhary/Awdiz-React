import { configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter'
import privacySlice from './privacy'
//step 1 : import configureStore from @reduxjs/toolkit 

//step 3: counter.js

//step 2 create instance of configureStore And map all slices of reducer in it
const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy : privacySlice.reducer
    }
}) 

//step 5 : counter.js
export default counterStore     //step 4: export store so it can be accesible to all
//step 6 : main index.js 




