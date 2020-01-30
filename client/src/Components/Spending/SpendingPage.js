import React, {useEffect} from 'react'
import Header from '../Home/Header'
import BottomNav from '../Nav/BottomNav'
import Hello from "../../Assets/Images/Group6.png"
import Text from '../../Assets/Images/Group5.png'
import Insight from "../../Assets/Images/Group4.png"
import Donut from '../Charts/Donut'
export default function SpendingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Header title = "My Spending Details"/>
            <div className = "spending">
                <div className = " spending__top spending__img-container">
                    <img className= "a" alt = "hello" src = {Hello}/>
                </div>
                <h3 className = "spending__text">January 2020 Spending</h3>
                <Donut/>
                <div className = "spending__img-container-bot spending__img-container">
                    <img alt = 'text' src = {Text}/>
                </div>

                <div className = " spending__img-container-tag spending__img-container">
                    <img alt = "insight" src = {Insight}/>
                </div>
            </div>
            <BottomNav/>
        </div>
    )
}
