import React, {useState} from 'react';
import Header from '../Home/Header'
import BottomNav from '../Nav/BottomNav'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const ConfirmPage = (props) => {
    const [editRedirect, setEditRedirect] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const {Status, Account, Round, cats} = props.location.state
    const RoundUp = (option) => {
        if(option=== 1) 
        {
            return 'Round To Next Dollar'
        } else if (option === 2) {
             return 'Next Dollar Plus $1'
        } else {
            return 'Custom'
        }
    }
    const confirm = async() => {
        setRedirect(true)
        await axios.post('/api/user')

    }
    if(redirect) 
    {
        return <Redirect to  = "/" />
    }
    if(editRedirect)
    {
       return <Redirect to = "/create"/>
    }
    return (
        <div>
            <Header title = "Confirm Portfolio"/>
            <div className = "confirm">
                <h2 className = "confirm__heading">Confirm Portfolio Creation</h2>
                <h3 className = "confirm__settings-heading">Account</h3>
                <h3 className = "confirm__settings-text">{Account}</h3>
                <h3 className = "confirm__settings-heading">Status</h3>
                <h3 className = "confirm__settings-text">{Status ? "Active" : "Disabled"}</h3>
                <h3 className = "confirm__settings-heading">Round up Amount</h3>
                <h3 className = "confirm__settings-text">{RoundUp(Round)}</h3>
                <h3 className = "confirm__settings-heading">Categories</h3>
                <h3 className = "confirm__settings-text">{cats.map(cat => {return `${cat}  `})}</h3>
                <div className = "confirm__container">
                    <button onClick = {() => confirm()} className = "confirm__button btn">Confirm</button>
                    <button  onClick = {() => setEditRedirect(true)}className = "confirm__button white-btn" >Edit</button>
                    <button onClick = {() => setRedirect(true)} className = "confirm__button white-btn">Cancel</button>
                </div>
             
            </div>
            <BottomNav/>
        </div>
    );
}

export default ConfirmPage;
