import React from 'react'
import Graph from '../../Assets/Images/graph.svg'
export default function AccountInfo() {
    return (
        <div className = "account">
            <h4 className = "account__number">MEMBERSHIP #19283947</h4>
            <div className = "account__banking">
                <div className = "account__banking-chequings">
                    <div>
                        <h3 className = "account__banking-text">Chequing</h3>
                        <h4 className = "account__banking-textnum">4938237123928</h4>
                    </div>
                    <div className = "money__container">
                        <h4 className = "money__text">$837.90</h4>
                    </div>
                </div>
                <div className = "account__banking-chequings bottom">
                <div>
                    <h3 className = "account__banking-text">Savings</h3>
                    <h4 className = "account__banking-textnum">4938237123928</h4>
                </div>
                <div className = "money__container">
                    <h4 className = "money__text">$1250.00</h4>
                </div>
            </div>
            </div>
            <div className = "account__graph-container">
                <img src = {Graph} alt = "graph"/>
            </div>
        </div>
    )
}
