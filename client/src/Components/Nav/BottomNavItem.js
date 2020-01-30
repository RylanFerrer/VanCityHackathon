import React from 'react'
import {Link} from 'react-router-dom'
export default function BottomNavItem(props) {
    const {active, type, image, text} = props
    if (text === 'Accounts') 
    {
        return (
            <div className = {`nav__item  ${active === type ? 'nav__item--active' : ''}`}>
                <Link to = "/"><img  className =  {`nav__item-image  ${active === type ? 'nav__item-image--active' : ''}`} alt = "Accounts" src = {image} /></Link>
                <h6 className = "nav__item-text">{text}</h6>
            </div>
        )
    }
    return (
        <div className = {`nav__item  ${active === type ? 'nav__item--active' : ''}`}>
                <img  className =  {`nav__item-image  ${active === type ? 'nav__item-image--active' : ''}`} alt = "Accounts" src = {image} />
                <h6 className = "nav__item-text">{text}</h6>
        </div>
    )
}
