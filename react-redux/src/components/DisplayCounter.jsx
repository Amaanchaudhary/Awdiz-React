import { useSelector } from "react-redux"

const DisplayCounter = () => {
        
    const counter = useSelector(store => store.counter)

    return (
        <div>
            <h2>Counter Current Value : {counter}</h2>
        </div>
    )
}

export default DisplayCounter