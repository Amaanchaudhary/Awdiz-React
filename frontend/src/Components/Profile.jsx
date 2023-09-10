import { useNavigate } from "react-router-dom"

function Profile(){
    const rout = useNavigate();

    function GotoHomePage(){
        rout("/")
    }
    return(
        <div>
            <h1>Profile</h1>
            <button onClick={GotoHomePage}>GotoHomePage</button>
        </div>
    )
}

export {Profile}