import { useNavigate } from "react-router-dom";

const Params = () => {

    const rout = useNavigate();

    return(
        <div>
            <h1>Params</h1>
            <button onClick={()=> rout("/singleProduct/8888888") }>Click to go single product</button>
        </div>
    )
}

export default Params;