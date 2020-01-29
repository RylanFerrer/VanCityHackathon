import React from 'react'
import Header from './Header'
import HomeBanner from './HomeBanner'
import HomeSignup from './HomeSignup'
import BottomNav from '../Nav/BottomNav'

export default function Home() {
    return (
        <div>
            <Header title = "My Accounts"/>
            <HomeBanner/>
            <HomeSignup/>
            <BottomNav active = "accounts"/>
        </div>
    )
}
