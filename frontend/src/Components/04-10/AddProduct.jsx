import React ,{ useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';

const AddProduct = () => {

    const [ProductData , SetProductData] = useState([{Title : "" , Price : "" , Image : "" }])

    // console.log(ProductData , "Product Data");

    const handleChange = (event) =>{
        // console.log(event.target.value)
        SetProductData({...ProductData, [event.target.name] : event.target.value});
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(ProductData.Title && ProductData.Price && ProductData.Image){
            try{
                const {data} = await axios.post("https://fakestoreapi.com/products",{
                    title : ProductData.Title,
                    price : ProductData.Price,
                    image : ProductData.Image
                })
                console.log(data , "response from post request")
                toast.success(`Product ${data.id} Added Succesfully`)
                SetProductData({Title : "" , Price : "" , Image : ""})

            }catch(error){
                console.log(error, "Error Found")
            }
        }else{
            toast.error("All Fields are Mandatory")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Product</h1>
                <label>Product Title</label><br/>
                <input type='text' onChange={handleChange} name='Title' /><br/>
                <label>Product Price</label><br/>
                <input type='number' onChange={handleChange} name='Price' /><br/>
                <label>Product Image</label><br/>
                <input type='url' onChange={handleChange} name='Image' /><br/><br/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default AddProduct