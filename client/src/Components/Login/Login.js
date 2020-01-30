import React, {useState} from 'react'
import axios from 'axios'
import Logo from "../../Assets/Images/Vancity.png"
import {Redirect} from 'react-router-dom'
export default function Login() {
    const [redirect, setRedirect] = useState(false)
    const verify = async(event) => {
        event.preventDefault();
        try {
             await axios.post('/api/auth', {
            user: event.target.user.value,
            password: event.target.password.value
        })
        setRedirect(true)
        } catch (e) {
            alert('error')
        }
    }
    if(redirect) 
    {
        return <Redirect to = '/'/>
    }
    return (
        <div className = "login">
            <div className = "login__logo-container">
                <img  src = {Logo} alt = "vancity" className = "login__logo"/>
             
            </div>
         
                <form onSubmit = {event => verify(event)}>
                <div className = "login__input-container">
                    <div>
                        <h3 className = "login__input-text">Username:</h3>
                        <input name =  "user" className = "login__input"></input>
                    </div>
                    <div>
                        <h3 className = "login__input-text">Password:</h3>
                        <input type = "password" name = "password" className = "login__input"></input>
                    </div>
                </div>
                <div className = "login__button-container">
                <button type = "submit" className = "login__button">Login</button>
                </div>
                </form>
              
            </div>
    )
}
