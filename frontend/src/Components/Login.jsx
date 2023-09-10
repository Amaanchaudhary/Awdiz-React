import { useNavigate } from "react-router-dom"

function Login(){
    const rout = useNavigate()

    function GotoHomePage(){
        rout("/")
    } 

    return(
        <div>
            <h1>This is Login Page</h1>
            <button onClick={GotoHomePage}>Go to HomePage</button>
        </div>
    )
}

export default Login