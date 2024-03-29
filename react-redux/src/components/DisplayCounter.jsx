import { useSelector } from "react-redux" //Step 8 : import useSelector from react-redux

const DisplayCounter = () => {   //step 10 : at control.jsx

    const privacy = useSelector((store) => store.privacy)
    const counter = useSelector((store) => store.counter)  //step 9 : 
    //useSelector hook used to subscribe the whole store or small slice of store like we did
    //if counter in store changes, useSelector will change in this counter also that we made
    return (
        <div>
            {privacy ? 
                <h2>Counter is Private !!!</h2>
                :
                <h2>Counter Current Value : {counter}</h2>
            }
        </div>
    )
}

export default DisplayCounter