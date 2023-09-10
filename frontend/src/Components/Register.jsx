import { useNavigate } from "react-router-dom";

function Register(){
    const rout = useNavigate();
    return (
        <div>
            <h1>This is Register</h1>
            <button onClick={() => rout("/")}>Go to HomePage</button>
        </div>
    )
}
export default Register;