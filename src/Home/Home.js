import React from 'react'
import "./Home.css"
import Product from "../Product/Product"
const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images.unsplash.com/photo-1532115764234-deff54fccb28?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner" srcSet="" />
            </div>
            <div className="home_row">
                <Product 
                    id="84376384"
                    title="Ferry from Port Blair to Havelock"
                    price={1200.00}
                    image="https://plus.unsplash.com/premium_photo-1661964091508-b77d484a3003?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    rating={5}
                    
                />
                <Product
                    id="49538094"
                    title="Ferry from Havelock to Neil"
                    price={1200.00}
                    rating={4}
                    image="https://images.unsplash.com/photo-1613589118187-25096300fb74?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

            </div>
            <div className="home_row">
                <Product
                    id="4903850"
                    title="Ferry from Neil to Port Blair"
                    price={1200.00}
                    rating={3}
                    image="https://plus.unsplash.com/premium_photo-1677343210300-717fba46be17?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Product
                    id="23445930"
                    title="Ferry from Port Blair to Havelock to Neil and back to Port
                    Blair"
                    price={1200.00}
                    rating={5}
                    image="https://images.unsplash.com/photo-1570694033987-8ad4f188f1d3?auto=format&fit=crop&q=80&w=1796&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                

            </div>
            {/* <div className="home_row">
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={230999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />

            </div> */}
        </div>
    )
}

export default Home
