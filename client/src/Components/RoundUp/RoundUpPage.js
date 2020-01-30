import React, {useState} from 'react'
import Header from '../Home/Header'
export default function RoundUpPage() {
    const [enabled, setEnabled] = useState(false)
    return (
        <div>
            <Header title = "Round Up Portfolio"/>
            <div className = "roundup">
            <h3 className = "roundup-text">Kickstart your savings with Vancity’s Round-Up Program. Round your purchases to the nearest dollar and deposit the difference into your investment account. Customize the amount and purchase category to round up.</h3>
                <h2 className = "roundup-heading">Round up portfolio</h2>
                <div className = "roundup__button-container">
                    <button onClick = {() => setEnabled(true)} className = {` roundup-one roundup__button ${enabled ? 'roundup__button-red': ''}`}>Active</button>
                    <button  onClick = {() => setEnabled(false)}  className = {`roundup__button ${!enabled ? 'roundup__button-red': ''}`}>Disabled</button>
                </div>
            <h3 className = "roundup-heading">Round up Amount</h3>
            
            </div>
        </div>
    )
}
