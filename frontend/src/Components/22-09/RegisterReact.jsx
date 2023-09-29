import { useState } from "react"
import {useNavigate} from 'react-router-dom';

const RegisterReact = () => {

    const [userData, setUserData] = useState({ Name: "", Email: "", Password: "" })

    const rout = useNavigate();
    console.log(userData)

    const HandleChange = (event) => {
        // console.log(event.target.value, "- value,", event.target.name, "- name")

        setUserData({...userData, [event.target.name]: event.target.value });
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();   //url bar me type ki hui value aajati h isiliye
        // alert("Data Submitted to backend")
        if (userData.Name && userData.Email && userData.Password) {
            if (userData.Password.length >= 8) {
                // const response = await axios.post("http/localhost:8000/register",{userData})
                const response = {data: {success : true}}
                if(response.data.success){
                    alert("Register Successfull.")
                    setUserData({Name : "" , Email : "" , Password : ""})   
                    rout("/")
                }else{
                    alert(response.data.error)
                }
            } 
            else {
                alert("passwword must be minimum 8 digit")
            }
        } 
        else {
            alert("All fields are mandatory!")
        }
    }

    return (
        <div>
            <form onSubmit={sendDataToBackend} autoComplete="off" >
                <h1>Register</h1>

                <label>Name</label><br />
                <input name='Name' type="text" onChange={HandleChange} autoComplete="off" /><br />

                <label>Email</label><br />
                <input name='Email' type="email" onChange={HandleChange} autoComplete="off" /><br />

                <label>Password</label><br />
                <input name='Password' type="password" onChange={HandleChange} autoComplete="off" /><br />

                <input type="Submit" /><br />
            </form>
        </div>
    )
}

export default RegisterReact