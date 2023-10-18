import React from 'react';
import "./Subtotal.css";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../StateProvider";
import { basketTotal } from '../reducer'
const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    const navigate=useNavigate();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} {basket.length > 1 ? "items" : "item"}) : <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" id="" /> This order contains a gift
                       </small>
                    </>
                )}
                decimalScale={2}
                value={basketTotal(basket)}
                thousandSeparator={true}
                prefix={'₹'}
                displayType={"text"}
            />
            <button onClick={e=>navigate('/payment')}>Procced to checkout</button>
        </div>
    )
}

export default Subtotal
