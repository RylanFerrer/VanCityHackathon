import React from 'react'
import Header from '../Home/Header'
import HomeBanner from '../Home/HomeBanner'
import HomeSignup from '../Home/HomeSignup'
import BottomNav from '../Nav/BottomNav'
import AccountInfo from './AccountInfo'
export default function Account() {
    return (
        <div>
            <Header title = "My Accounts"/>
            <HomeBanner/>
            <HomeSignup/>
            <AccountInfo/>
            <BottomNav active = "accounts"/>
        </div>
    )
}
