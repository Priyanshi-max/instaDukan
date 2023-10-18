import React, { useEffect } from 'react'
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout"
import Login from "./Login/Login";
import { auth } from "./firebase";
import Payment from "./Payment/Payment"
import {useStateValue} from "./StateProvider";
const App = () => {
    const [{},dispatch]=useStateValue()
    useEffect(()=>{
        // will only run once the app is loaded
        auth.onAuthStateChanged(authUser=>{
            console.log(authUser);

            if(authUser){
                // if user is login
                dispatch({
                    type:"SET_USER",
                    user:authUser
                })
            }
            else{
                // user is logged out
                dispatch({
                    type:"SET_USER",
                    user:null
                })
            }
        })
    },[])
    return (
        <Router>

            <div className="app">

                <Routes>
                    <Route path="/" element={[<Header />, <Home />]} />
                    <Route path="/checkout" element={[<Header />, <Checkout />]} />
                    <Route path="/payment" element={[<Header />, <Payment />]} />
                    <Route path="/login" element={[<Login />]} />

                </Routes>
            </div>
        </Router>
    )
}

export default App
