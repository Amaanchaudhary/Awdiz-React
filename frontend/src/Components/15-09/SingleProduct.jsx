import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const rout = useNavigate();

    const {id} = useParams();
    alert(id)
    const {name} = useParams();
    return (
        <div>
            <h1>Single Product {name} {id} </h1> 
            <button onClick={() => rout("/")}>Go to Homepage</button>
        </div>
    )
}

export default SingleProduct;