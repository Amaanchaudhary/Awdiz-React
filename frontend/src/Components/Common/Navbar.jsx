import { useContext } from 'react'
import './Navbar.css'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { state, Logout } = useContext(AuthContext)
    const rout = useNavigate()

    return (
        <div className="navbarScreen">
            <div onClick={() => rout("/")} className='navbarLeft'>HOME</div>
            <div className='navbarMid'>
                <div className='semiNavbarMid1' onClick={() => rout("/product")}>PRODUCTS</div>
                {state?.user?.id &&
                    <div className='semiNavbarMid2'>
                        <div onClick={() => rout("/yourproducts")}>YOUR PRODUCTS</div>
                        <div onClick={() => rout("/addproduct")}>ADD PRODUCTS</div>
                    </div>}
            </div>
            <div className='navbarRight'>
                {state?.user?.id ?
                    <>
                        <div onClick={() => rout("/profile")}>PROFILE</div>
                        <div onClick={() => rout("/cart")}>CART</div>
                        <div onClick={Logout}>LOGOUT</div>
                    </>
                    :
                    <div onClick={() => rout("/login")}>LOGIN</div>
                }


            </div>
        </div>
    )
}

export default Navbar