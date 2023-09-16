import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Counter(){
    const rout = useNavigate();

    const [counter , setCounter] = useState(0);
    const [Name, setName] = useState('amaan');
    console.log(counter)

    return(
        <div>
            <h1 id="likes" >Likes - {counter}</h1>
            {/* <h1>Name - {Name}</h1> */}
            <button id="buttonlike" onClick={() => setCounter((a) => a + 1)}>Like <i class="fa-solid fa-thumbs-up"></i></button><h1></h1>
            <button id="buttondislike" onClick={() => setCounter((b) => b - 1)}>Dislike <i class="fa-solid fa-thumbs-down"></i></button><h1></h1>
            <button id="button" onClick={() => rout('/')}>Go to homePage <i class="fa-solid fa-house"></i></button>
            {/* <button onClick={() => setName((c) => '')}>Change Name</button> */}
        </div>
    )
}

export default Counter

