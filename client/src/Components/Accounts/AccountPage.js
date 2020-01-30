import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../Home/Header'
import HomeBanner from '../Home/HomeBanner'
import HomeSignup from '../Home/HomeSignup'
import BottomNav from '../Nav/BottomNav'
import AccountInfo from './AccountInfo'
import AccountPageConfirmed from './AccountPageConfirmed'
export default function Account() {
    const [user,setUser] = useState(undefined)
    useEffect(() => {
        const fetchData = async() => {
            try {
            const userData = await axios.get('/api/user')
            setUser(userData.data)
            } catch(e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])
    if(user && !user.hasPortfolio)
    {
    return (
        <div>
            <Header title = "My Accounts"/>
            <HomeBanner/>
            <HomeSignup/>
            <AccountInfo/>
            <BottomNav active = "accounts"/>
        </div>
    )
    } else if (user && user.hasPortfolio){ return <AccountPageConfirmed/>}
     return <h1>Loading</h1>
}
