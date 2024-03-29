import React, { useContext, useEffect, useState } from "react";
// import axios from 'axios';
import toast from 'react-hot-toast';
import api from "../../Context/axiosConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const AddProduct = () => {

    const rout = useNavigate()

    const { state } = useContext(AuthContext);

    const [ProductData, SetProductData] = useState([{ name: "", price: "", image: "", category: "" }])

    // console.log(ProductData , "Product Data");

    const handleChange = (event) => {
        // console.log(event.target.value)
        SetProductData({ ...ProductData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (ProductData.name && ProductData.price && ProductData.image && ProductData.category) {
            try {
                const { data } = await api.post("/product/add-product", {
                    name: ProductData.name,
                    price: ProductData.price,
                    image: ProductData.image,
                    category: ProductData.category,
                    id: state?.user?.id
                })
                // console.log(data , "response from post request")
                if (data.success) {
                    toast.success(data.message)
                    rout("/yourproducts")
                    SetProductData({ name: "", price: "", image: "", category: "" })
                }
            } catch (error) {
                console.log(error, "Error Found")
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("All Fields are Mandatory")
        }
    }
    // console.log(state , "state")

    useEffect(() => {
        if (!state?.user?.id) {
            toast.error("Please login to access this page")
            rout("/login")
        }
        },[state.user.id])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Product</h1>

                <label>Product Title</label><br />
                <input type='text' onChange={handleChange} name='name' value={ProductData.title} /><br />

                <label>Product Category</label><br />
                <input type='text' onChange={handleChange} name='category' value={ProductData.category} /><br />

                <label>Product Price</label><br />
                <input type='number' onChange={handleChange} name='price' value={ProductData.price} /><br />

                <label>Product Image</label><br />
                <input type='url' onChange={handleChange} name='image' value={ProductData.image} /><br /><br />

                <input type='submit' value='Add Product' />
            </form>
        </div>
    )
}

export default AddProduct