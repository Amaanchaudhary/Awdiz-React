import { useDispatch } from 'react-redux'
import './Control.css'

const Control = () => {

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch({type : "INCREMENT"})
    }
    const handleDecrement = () => {
        dispatch({type : "DECREMENT"})
    }

    return (
        <div className="buttons">
            <button className='plus' onClick={handleIncrement}>+1</button>
            <button className='minus' onClick={handleDecrement}>-1</button>
        </div>
    )
}

export default Control