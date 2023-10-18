import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import FlipMove from "react-flip-move"
const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = (basket) => {
        dispatch({
            type:"REMOVE_ITEM",
            id:id
        })
    }
    return (
        

        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt={title} />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <small>₹</small>
                <strong>{price}</strong>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (

                        <p key={id}>⭐️</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
       

    )
}

export default CheckoutProduct
