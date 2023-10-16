import { useNavigate } from "react-router-dom";

const Params = () => {

    const rout = useNavigate();

    return(
        <div>
            <h1>Params</h1>
            <button onClick={()=> rout("/singleProduct/8888888/T-shirts ") }>Click to go single product</button>
            <button onClick={()=> rout("/") }>Goto HomePage</button>
        </div>
    )
}

export default Params;