import React from 'react'
import accounts from '../../Assets/Icons/accounts.svg'
import transfer from '../../Assets/Icons/transfer.svg'
import bill from '../../Assets/Icons/bill.svg'
import settings from '../../Assets/Icons/settings.svg'
import BottomNavItem from './BottomNavItem'
export default function BottomNav(props) {
    const {active} = props
    return (
        <div className = "nav">
            <BottomNavItem active = {active} type = {'accounts'} image = {accounts} text = {'Accounts'}/>
            <BottomNavItem active = {active} type = {'transfer'} image = {transfer} text = {'Transfer Money'}/>
            <BottomNavItem active = {active} type = {'pay'} image = {bill} text = {'Pay Bills'}/>
            <BottomNavItem active  = {active} type = {'settings'} image  = {settings} text  = {'Settings'}/>
        </div>
    )
}
