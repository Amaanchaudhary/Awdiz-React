const redux = require('redux')  //step 1 install redux and import it

const initialVal = {     //step 4 create initialValue
    counter : 0
}

const reducer = (store = initialVal , action) => {    //step 3 create reducer and pass initialVal & action in it
    let newStore = store                    //created newState = state and update it according to action.type 
    if(action.type == 'INCREMENT'){ 
        newStore = {counter : store.counter + 1};
    }
    else if(action.type == 'DECREMENT'){
        newStore = {counter : store.counter - 1};
    }
    else if(action.type == 'ADDITION'){
        newStore = {counter : store.counter + action.payload.number};
    }
    // console.log('reducer called', action);
    return newStore                                     //return newState
}

const store = redux.createStore(reducer);   //step 2 create store and pass reducer in it

const subscriber = () => {                 
    const state = store.getState()         // Simple Subscriber only want value , 
    console.log(state);                    // & print it
}

store.subscribe(subscriber);               //step 5 create subscriber

store.dispatch({type : 'INCREMENT' })      //step 6 create dispatch and type
store.dispatch({type : 'DECREMENT' })
store.dispatch({type : 'INCREMENT' })
store.dispatch({type : 'ADDITION' , payload : {number : 7}})
store.dispatch({type : 'DECREMENT' })