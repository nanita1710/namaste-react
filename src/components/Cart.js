import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    return (
        <div className="text-center p-4 m-4">
           <h1 className="text-2xl font-bold"> 
                Cart
            </h1> 
            <div className="w-1/2 m-auto">
            {cartItems.length !== 0 && <button className="p-2 m-2 bg-black rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>}
            {cartItems.length === 0 && <h1>Your cart is empty. Go and add something to your cart.</h1>}
                <ItemsList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;