import {createStore} from 'redux'   //step 1 import createStore from redux

const initialialValue = {       //step 4 : create initial value
    counter : 0 ,
    privacy : false
}
                                //Step 3: Create Reducer and pass initialVal and action
const counterReducer = (store = initialialValue , action) => { 
    // console.log("action recieved" , action)  

    if(action.type == 'INCREMENT'){          //give actions based on action.type
        return {...store , counter : store.counter + 1}  //and return it
    }
    else if(action.type == 'DECREMENT'){
        return {...store , counter : store.counter - 1}
    }
    else if(action.type == 'ADD'){
        return {...store , counter : store.counter + Number(action.payload.num)}
    }
    else if(action.type == 'SUBSTRACT'){
        return {...store , counter : store.counter - Number(action.payload.num)}
    }
    else if(action.type == 'PRIVACY'){
        return {...store , privacy : !store.privacy}
    }
    return store        
}

const counterStore = createStore(counterReducer) //step 2 create instance of createStore
                                                 //And pass reducer in it

export default counterStore         //step 5: export store so it can be accesible to all
                                    //step 6 : main index.js 