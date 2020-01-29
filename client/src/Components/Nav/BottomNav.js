import React from 'react'
import accounts from '../../Assets/Icons/accounts.svg'
import transfer from '../../Assets/Icons/transfer.svg'
import bill from '../../Assets/Icons/bill.svg'
import settings from '../../Assets/Icons/settings.svg'
export default function BottomNav() {
    return (
        <div className = "nav">
            <div className = "nav__item nav__item--active">
                <img  className =  "nav__item-image nav__item-image--active" alt = "Accounts" src = {accounts} />
                <h6 className = "nav__item-text">Accounts</h6>
            </div>
            <div className = "nav__item">
                <img  className =  "nav__item-image" alt = "Accounts" src = {transfer} />
                <h6 className = "nav__item-text">Transfer Money</h6>
            </div>
            <div className = "nav__item">
                <img  className =  "nav__item-image" alt = "Accounts" src = {bill} />
                <h6 className = "nav__item-text">Pay Bills</h6>
            </div>
            <div className = "nav__item">
                <img  className =  "nav__item-image" alt = "Accounts" src = {settings} />
                <h6 className = "nav__item-text">Settings</h6>
            </div>
        </div>
    )
}
