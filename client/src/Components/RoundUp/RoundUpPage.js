import React, {useState} from 'react'
import Header from '../Home/Header'
import BottomNav from '../Nav/BottomNav'
export default function RoundUpPage() {
    const [enabled, setEnabled] = useState(false)
    const [roundAmount, setRoundAmount] = useState(0.35)
    const [option, setOption] = useState(1);
    const [categories, setCategories] = useState([])
    const roundCalculator = (opt) => {
        if (opt === 1)
        {
            setRoundAmount(0.35)
        } else if (opt=== 2) {
            setRoundAmount(1.35)
        } 
        setOption(opt)
    }
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
            <div>
                <button  onClick = {() => roundCalculator(1) } className = {`roundup__amount-button ${option === 1 ? 'roundup__button-red' :'' }`}>Round To Next Dollar</button>
                <button onClick = {() => roundCalculator(2) } className = {`roundup__amount-button ${option === 2 ? 'roundup__button-red' : ''}`}>Next Dollar Plus $1</button>
                <button onClick = {() => roundCalculator(3) } className = {`roundup__amount-button ${option === 3 ? 'roundup__button-red' : ''}`}>Custom Amount</button>
            </div>
            <div className = "roundup__amount-input-container">
                <input style = {{display: `${option !== 3 ? 'none': 'block'}`}} onChange = {event => setRoundAmount(event.target.value)} type="number"  className = "roundup__amount-input"></input>
            </div>
            <h4 className = "roundup-text center">{`For a purchase of $1.65 you will invest $ ${roundAmount}`}</h4>
            <h3 className = "roundup-heading">Select Round up Categories</h3>
              
            </div>
            <div className = "roundup__categories-container">
            <button className = {`roundup__categories-button end`}>Groceries</button>
            <button className = {`roundup__categories-button`}>Utilities</button>
            <button className = {`roundup__categories-button`}>Health & Fitness</button>
            <button className = {`roundup__categories-button end`}>Shopping</button>
            <button className = {`roundup__categories-button`}>Food & Drink</button>
            <button className = {`roundup__categories-button`}>Travel</button>
        </div>
     
            <BottomNav/>
        </div>
    )
}
