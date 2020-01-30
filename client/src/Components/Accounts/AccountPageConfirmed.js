import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../Home/Header'
import BottomNav from '../Nav/BottomNav'
import ConfirmedGraphs from './ConfirmedGraphs'
import AccountInfoConfirmed from './AccountInfoConfirmed'
const AccountPageConfirmed = () => {
    return (
        <div>
            <Header title = "My Accounts"/>
            <AccountInfoConfirmed/>
            <BottomNav active = "accounts"/>
            <ConfirmedGraphs/>
        </div>
    );
}

export default AccountPageConfirmed;
