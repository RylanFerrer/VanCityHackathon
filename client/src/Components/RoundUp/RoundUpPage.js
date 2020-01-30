import React, {useState} from 'react'
import Header from '../Home/Header'
import BottomNav from '../Nav/BottomNav'
export default function RoundUpPage(props) {
    let prices = {Groceries: 23.00, Utilities:15.25,HealthFitness: 19.00, Shopping: 19.00, FoodDrink: 38.00, Travel: 45.00 }
    const [enabled, setEnabled] = useState(false)
    const [roundAmount, setRoundAmount] = useState(0.35)
    const [option, setOption] = useState(1);
    const [categories, setCategories] = useState([])
    const [savedMoney, setSavedMoney] = useState(0)
    const roundCalculator = (opt) => {
        if (opt === 1)
        {
            setRoundAmount(0.35)
        } else if (opt=== 2) {
            setRoundAmount(1.35)
        } 
        setOption(opt)
    }
    const addSelectedCategories = (category) => {
        let newOption = category === 'Health & Fitness' ? 'HealthFitness' : category === 'Food & Drink' ?  'FoodDrink' : category
        //Check if category is already selected
        if(categories.includes(category)) {
            setCategories(categories.filter((cat) => cat !== category))
            setSavedMoney(savedMoney - prices[newOption] )
        } else {
            setCategories([...categories, category])
            setSavedMoney( savedMoney + prices[newOption])
        }
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
                <button onClick = {() => addSelectedCategories('Groceries')}className = {`roundup__categories-button end ${categories.includes('Groceries') ? 'roundup__categories-button-selected' : ''}`}>Groceries</button>
                <button onClick = {() => addSelectedCategories('Utilities')} className = {`roundup__categories-button  ${categories.includes('Utilities') ? 'roundup__categories-button-selected' : ''} `}>Utilities</button>
                <button onClick = {() => addSelectedCategories('Health & Fitness')} className = {`roundup__categories-button  ${categories.includes('Health & Fitness') ? 'roundup__categories-button-selected' : ''}`}>Health & Fitness</button>
                <button onClick = {() => addSelectedCategories('Shopping')} className = {`roundup__categories-button end  ${categories.includes('Shopping') ? 'roundup__categories-button-selected' : ''}`}>Shopping</button>
                <button onClick = {() => addSelectedCategories('Food & Drink')} className = {`roundup__categories-button  ${categories.includes('Food & Drink') ? 'roundup__categories-button-selected' : ''}`}>Food & Drink</button>
                <button onClick = {() => addSelectedCategories('Travel')} className = {`roundup__categories-button  ${categories.includes('Travel') ? 'roundup__categories-button-selected' : ''}`}>Travel</button>
            </div>
            <h3 className = "roundup__savings-heading">Based on last months spending you would have invested</h3>
            <h1 className = "roundup__savings">${savedMoney}</h1>
            <div className = "roundup__save-container">
                <button className = "roundup__save-button">Save</button>
            </div>
     
            <BottomNav/>
        </div>
    )
}
