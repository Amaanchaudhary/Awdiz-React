import {useDispatch, useSelector } from 'react-redux' //step 11: import useDispatch 
import './Control.css'
import { useRef } from 'react'
import { counterActions } from '../store/counter'
import { privacyActions } from '../store/privacy'

const Control = () => {

    const dispatch = useDispatch()   //create instance of useDispatch as dispatch keyword
    const inputElement = useRef()
    const privacy = useSelector((store) => store.privacy)

    const handleIncrement = () => {
        dispatch(counterActions.increment()); //step 10: just import slices of actions and use it by method name
    }                                                //and dispatch it
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }
    const handleAdd = () => {
        dispatch(counterActions.add(inputElement.current.value))  //direct sending number
        inputElement.current.value = '' //value = blank krdo bhejne k baad
    }
    const handleSubstract = () => {
        dispatch(counterActions.substract({num : inputElement.current.value})) //send as a object
        inputElement.current.value = '' //value = blank krdo bhejne k baad
    }
    const handlePrivacy = () => {
        dispatch(privacyActions.toggle())
    }

    return (
        <>
            <div className="buttons">
                <button className='plus' onClick={handleIncrement}>+1</button>
                <button className='minus' onClick={handleDecrement}>-1</button>

                <button onClick={handlePrivacy} className={`toggle ${privacy ? 'on' : 'off'}`}>
                    <span className={`slider ${privacy ? 'on' : 'off'}`}/>
                </button>
                
            </div>
            <div className="buttons-down">
                <button onClick={handleAdd}>Add</button>
                <input type='number' placeholder='Enter Number' ref={inputElement} />
                <button onClick={handleSubstract} style={{backgroundColor : 'red'}}>substract</button>
            </div>
        </>


    )
}

export default Control