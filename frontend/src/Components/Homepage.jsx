import {useNavigate} from 'react-router-dom'


function Homepage() {

    const rout = useNavigate();

    function goToRegister(){
        rout("register")
    }

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <button onClick={() => rout("/login")}>Go to Login</button>
            <button onClick={goToRegister}>Go to Register</button>
            <button onClick={() => rout("/profile")}>Go to Profile</button>
            <button onClick={() => rout("/counter")}>Go to Counter</button>
            <button onClick={() => rout("/effect1")}>Go to Effect1</button>
            <button onClick={() => rout("/effect2")}>Go to Effect2</button>
            <button onClick={() => rout("/effect3")}>Go to Effect3</button>
            <button onClick={() => rout("/effect4")}>Go to Effect4</button>
            <button onClick={() => rout("/params")}>Go to Params</button>
            <button onClick={() => rout("/singleproduct/232323/Jeans")}>Goto Single Product</button>
            <button onClick={() => rout("/mapping")}>Go to Mapping</button>
            <button onClick={() => rout("/ternary")}>Go to Ternary</button>
            <button onClick={() => rout("/styledcomponent")}>Go to Styled Component</button>
        </div>
    )
}

export default Homepage;