import React from 'react'

export default function Header(props) {
    const {title} = props
    return (
            <div className = "home__header">
                <div className = "home__header-nav">
                <i className="fas home__icon fa-2x fa-bars"></i>
                </div>
                <div className = "home__header-container">
                    <h3 className = "home__header-heading">{title}</h3>
                </div>
            </div>
    )
}
