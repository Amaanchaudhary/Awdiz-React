import { useState } from "react"

const RegisterReact = () => {

    const [userData, setUserData] = useState({ Name: "", Email: "", Password: "" })

    // console.log(userData)

    const sendDataToBackend = () => {
        alert("Data Submitted to backend")
    }

    const HandleChange = (event) => {
        console.log(event.target.value, "- value,", event.target.name, "- name")
    }

    return (
        <div>
            <form onSubmit={sendDataToBackend} >
                <h1>Register</h1>

                <label>Name</label><br />
                <input name='Name' type="text" onChange={HandleChange} /><br />

                <label>Email</label><br />
                <input name='Email' type="email" onChange={HandleChange} /><br />

                <label>Password</label><br />
                <input name='Password' type="password" onChange={HandleChange} /><br />

                <input type="Submit" /><br />
            </form>
        </div>
    )
}

export default RegisterReact