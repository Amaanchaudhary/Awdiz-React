import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useContext } from 'react';
// import { MyContext } from '../Context/GlobalContext';
import { AuthContext } from '../Context/AuthContext';


function Homepage() {

    //    const {state , dispatch} = useContext(MyContext)
    const { state, Logout } = useContext(AuthContext)

    const rout = useNavigate();

    function goToRegister() {
        rout("register")
    }

    return (
        <>
            <div>
                <h1>Homepage for Awdiz</h1>
                <h1>User : {state?.user?.name}</h1>
                {/* <h1>Counter : {state.count}</h1> */}
                {/* <button onClick={() => dispatch({type : "Increment"})} >Increment+</button><br/><br/>    */}
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
                <button onClick={() => rout("/state&effect")}>Go to State and Effect page</button>
                <button onClick={() => rout("/dynamicstyle")}>Go to Dynamic Style</button>
                <button onClick={() => rout("/childrenprops")}>Go to ChildrenProps</button>
                <button onClick={() => rout("/registerreact")} >Go to Register</button>
                <button onClick={() => rout("/classcomponent")}>Go to Class Component</button>
                <button onClick={() => toast.success("Clicked")} >Click to toast succes</button>
                <button onClick={() => toast.error("Clicked")} >Click to toast Error</button>
                <button onClick={() => rout("/product")} >Go to Product</button>
                <button onClick={() => rout("/addproduct")} >Go to Add Product</button>
                <button onClick={() => rout("/usememo")} >Go to UseMemo</button>
                <button onClick={() => rout("/usecallback")} >Go to UseCallBack</button>
                <button onClick={() => rout("/testreducer")} >Go to TestReducer</button>
                <button onClick={() => rout("/customhook")} >Go to Custom Hook</button>
                <button onClick={() => rout("/yourproducts")} >Go to your Product</button>
                <button onClick={() => rout("/customhookls")} >Go to Custom Hook LS</button><br /><br />
                <button onClick={() => { Logout() }}>Logout</button>
            </div>
        </>
    )
}

export default Homepage;