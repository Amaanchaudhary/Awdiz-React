import { useState } from "react"
import { useEffect } from "react";
import toast from "react-hot-toast";    
import axios from "axios";
import './Product.css'
import { useNavigate } from "react-router-dom";
import api from "../../Context/axiosConfig";


const Product = () => {

    const [Products, setProducts] = useState([]);
    const rout = useNavigate();

    useEffect(() => {
        // toast.success("Page rendered on Browser")

        async function getProduct() {
            try {
                // const { data } = await axios.get('https://fakestoreapi.com/products');
                const { data } = await api.get('/product/get-all-product');

                // console.log(data, "data here");
                if(data.success){
                    setProducts(data.products)
                }

            } catch (error) {
                toast.error(error.data.message)
            }
        }
        
        getProduct()
    }, [])

    return (
        <div>

            {Products?.length ?
                <div id="main" >{Products.map((pro) => (
                    <div onClick={() => rout(`/single-product/${pro._id}`)} className="body">
                        <img className="images" src={pro.image} />  
                        <h3>Name : {pro.name}</h3>
                        <h4>Price : {pro.price} $</h4>
                        <p>Category : {pro.category}</p>
                        <button className="button" onClick={() => toast.success("Product added to cart")}>Add to cart</button>
                    </div>
                ))}
                </div>  
                :
                <div>Loading...</div>}

        </div>
    )
}

export default Product