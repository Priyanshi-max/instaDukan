import React, { useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"
const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        // some firebase login thing......
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
            navigate('/');
        })
        .catch(err=>alert(err));

    }
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) =>
        // if new user is successfully created;
        { 
            if(auth){
                navigate('/')
            }
        })
            .catch(error => alert(error));

        
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://imageio.forbes.com/specials-images/imageserve/5d825aa26de3150009a4616c/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds" alt="Logo" />
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5> Email </h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5> Password </h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login_signin" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.
            </p>
                <button className="login_register" onClick={register}>Create an account</button>
            </div>
        </div>
    )
}

export default Login
