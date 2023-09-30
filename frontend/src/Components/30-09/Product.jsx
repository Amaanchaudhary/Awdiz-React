import { useState } from "react"
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import './Product.css'


const Product = () => {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        // toast.success("Page rendered on Browser")

        async function getProduct() {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products');
                console.log(data, "data here");

                setProducts(data)
            } catch (error) {
                toast.error(error.message)
            }
        }
        getProduct()
    }, [])

    return (
        <div>
            {Products?.length ? 
            
            <div id="main" >{Products.map((pro) => (
                <div className="body">
                    <img className="images" src={pro.image} />
                    <h3>Name : {pro.title}</h3>
                    <h4>Price : {pro.price} $</h4>
                    <button className="button">Add to cart</button>
                </div>
            ))} 
            </div> : <div>Loading...</div>}

        </div>
    )
}

export default Product