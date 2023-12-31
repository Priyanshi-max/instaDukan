import React from 'react'
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import {useStateValue} from "../StateProvider";
import FlipMove from 'react-flip-move';
const Checkout = () => {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <div className="checkout_title">
            <h4>Hello , {user? user?.email:"Guest"}</h4>
                <h2>Your Shopping Cart</h2>
                

                {basket.map((item)=>(
                    <CheckoutProduct 
                    id={item.id}
                    image={item.image} 
                    title={item.title}
                    price={item.price}
                    rating={item.rating}    
                    />
                ))}
                
            </div>
            </div>
            <div className="checkout_right">
                 <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
