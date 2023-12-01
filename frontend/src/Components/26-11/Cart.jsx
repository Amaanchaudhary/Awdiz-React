import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../Context/axiosConfig";

const Cart = () => {
    const rout = useNavigate();
    const { state } = useContext(AuthContext);
    const [cartProducts, setCartProducts] = useState([]);
    // alert(state?.user?.id)

    async function getYourCartProduct() {
        try {
            // alert(state?.user?.id)
            const response = await api.post("/user/all-cart-products", { id: state?.user?.id })

            if (response.data.success){
                toast.success(response.data.message)
                console.log(response.data.products , "cart products ")
                // setCartProducts(response.data.products)
                // console.log(cartProducts)
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
        <div>
            
        </div>
    )
}

export default Cart