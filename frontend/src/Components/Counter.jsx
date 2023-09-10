import { useNavigate } from "react-router-dom";

function Counter(){
    const rout = useNavigate();

    return(
        <div>
            <h1>Counter Page</h1>
            <button onClick={() => rout('/')}>Go to homePage</button>
        </div>
    )
}
export default Counter

