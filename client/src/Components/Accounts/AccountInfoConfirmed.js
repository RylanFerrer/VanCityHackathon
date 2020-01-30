import React from 'react';

const AccountInfoConfirmed = () => {
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
            <div className = "account__banking-chequings">
            <div>
                <h3 className = "account__banking-text">Savings</h3>
                <h4 className = "account__banking-textnum">4938237123928</h4>
            </div>
            <div className = "money__container">
                <h4 className = "money__text">$1250.00</h4>
            </div>
        </div>
        <div className = "account__banking-chequings bottom">
                <div>
                    <h3 className = "account__banking-text">Investment - Round Up</h3>
                    <h4 className = "account__banking-textnum">4935438472934</h4>
                </div>
                <div className = "money__container">
                    <h4 className = "money__text">$5.00</h4>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AccountInfoConfirmed;
