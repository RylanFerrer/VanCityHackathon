import React from 'react'
import HomeHeader from './HomeHeader'
import HomeBanner from './HomeBanner'
import HomeSignup from './HomeSignup'

export default function Home() {
    return (
        <div>
            <HomeHeader/>
            <HomeBanner/>
            <HomeSignup/>
        </div>
    )
}
