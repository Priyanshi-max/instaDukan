import React from 'react';
import "./Payment.css";
import {Link} from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"
const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="payment">
            
            <div className="paymentHeader">
                <h2>Checkout <Link to="/checkout">({basket.length} items)</Link></h2>
            </div>
            
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address:</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map((item) => (
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
            <div className="payment_section">
                        <div className="payment_title">
                            <h2>Payment Method</h2>
                        </div>
                        <div className="payment_method">

                        </div>
            </div>
        </div>
    )
}

export default Payment
