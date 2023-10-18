// import React from 'react'
// import "./Product.css";
// import {useStateValue} from "../StateProvider";
// const Product = ({id,title,image,rating,price}) => {
//     const [{basket},dispatch]=useStateValue();
//     // console.log(basket)
//     function addToBasket(){
//         // dispatch the item into data layer
//         dispatch({
//             type:"SHOP_NOW",
//             item:{
//                 id:id,
//                 title:title,
//                 image:image,
//                 price:price,
//                 rating:rating
//             }
//         })
//     }
//     return (
//         <div className="product">
//             <div className="product_info">
//                 <p>{title}</p>
//                 <p className="product_price">
//                     <small>₹</small>
//                     <strong>{price}</strong>
//                 </p>
//                 <div className="product_rating">
//                 {Array(rating).fill().map((_,i)=>(

//                     <p key={i}>⭐️</p>
//                 ))}
//                 </div>
//             </div>
//             <img src={image} alt=""/>
//             <button onClick={addToBasket}>Shop Now</button>
//         </div>
//     )
// }

// export default Product
import React, { useState } from 'react';
import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function addToBasket() {
    // Dispatch the item into data layer
    dispatch({
      type: "SHOP_NOW",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });

    // Show the modal
    setIsModalVisible(true);
  }

  function handleModalClose() {
    // Hide the modal and reset input values
    setIsModalVisible(false);
    setName('');
    setPhone('');
  }

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>⭐️</p>
          ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Shop Now</button>

      {isModalVisible && (
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={handleModalClose}>&times;</span>
            <h2>Enter Your Details</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleModalClose}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
