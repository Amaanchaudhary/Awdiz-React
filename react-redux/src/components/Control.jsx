import { useDispatch, useSelector } from 'react-redux'  //step 10: import useDispatch from react-redux
import './Control.css'
import { useRef } from 'react'

const Control = () => {

    const dispatch = useDispatch()  //step 11 : create instance of useDispatch
    const inputElement = useRef()
    const privacy = useSelector((store) => store.privacy)

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" })  //and use dispatch and give type of action.type 
    }
    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" })
    }
    const handleAdd = () => {
        dispatch({ type: "ADD" , payload : {num : inputElement.current.value} })
        inputElement.current.value = '' //value = blank krdo bhejne k baad
    }
    const handleSubstract = () => {
        dispatch({ type: "SUBSTRACT" , payload : {num : inputElement.current.value} })
        inputElement.current.value = '' //value = blank krdo bhejne k baad
    }
    const handlePrivacy = () => {
        dispatch({ type: "PRIVACY"})
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