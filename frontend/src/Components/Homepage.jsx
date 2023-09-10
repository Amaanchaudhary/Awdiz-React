import {useNavigate} from 'react-router-dom'


function Homepage() {

    const rout = useNavigate()
    function goToRegister(){
        rout("register")
    }

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <button onClick={() => rout("/login")}>Go to Login</button>
            <button onClick={() => rout("/register")}>Go to Register</button>
            <button onClick={() => rout("/profile")}>Go to Profile</button>
            <button onClick={() => rout("/amaan")}>Go to Counter</button>
        </div>
    )
}

export default Homepage;