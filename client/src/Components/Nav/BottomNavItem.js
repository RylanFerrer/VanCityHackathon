import React from 'react'

export default function BottomNavItem(props) {
    const {active, type, image, text} = props
    return (
        <div className = {`nav__item  ${active === type ? 'nav__item--active' : ''}`}>
                <img  className =  {`nav__item-image  ${active === type ? 'nav__item-image--active' : ''}`} alt = "Accounts" src = {image} />
                <h6 className = "nav__item-text">{text}</h6>
        </div>
    )
}
