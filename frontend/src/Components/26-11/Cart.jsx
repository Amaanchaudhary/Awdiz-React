import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../Context/axiosConfig";
import './Cart.css'

const Cart = () => {
    const rout = useNavigate();
    const { state } = useContext(AuthContext);
    const [cartProducts, setCartProducts] = useState([]);
    console.log(cartProducts)
    // alert(state?.user?.id)

    async function getYourCartProduct(){
        try {
            // alert(state?.user?.id)
            const response = await api.post("/user/all-cart-products", { id: state?.user?.id })

            if (response.data.success){
                toast.success(response.data.message)
                console.log(response.data.products , "cart products ")
                setCartProducts(response.data.products)
                // console.log(cartProducts)
            }
        }catch(error){
            console.log(error)
        }
    }

    async function deleteCartProduct(id){
        try{
            // console.log( state?.user?.id , "id")
            const response = await api.post("/user/delete-cart-product" , {userId : state?.user?.id , productId : id})
            if(response.data.success){
                
                toast.success(response.data.message)
                setCartProducts(response.data.products)
            }
        }catch(error){
            console.log(error)
        }
    } 


    useEffect(() => {
        try {
            if (state?.user && state?.user?.id === undefined) {
                toast.error("Please login to access your cart products.")
                setTimeout(() => {
                    rout("/login")
                }, 2000);
            }
            else {
                if (state?.user?.id) {
                    getYourCartProduct()
                }
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }, [state])

    return (
        <div className="cartScreen">
            {cartProducts.map((pro) => (
                <div className="cartproduct">
                    <div className="cartproductimg">
                        <img src={pro.image}/>
                    </div>
                    <h3>Name : {pro.name}</h3>
                    <h4>Price : ${pro.price}/-</h4>
                    <h4>Category : {pro.category}</h4>
                    <button onClick={() => deleteCartProduct(pro._id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Cart