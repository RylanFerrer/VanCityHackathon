import React from 'react'
import {Link} from 'react-router-dom'
export default function HomeSignup() {
    return (
        <div className = "home__signup">
            <div className = "home__signup-text-container">
            <h4 className = "home__signup-text">Start a Vancity round-up  portfolio now and start saving immediately on your everyday purchases. Click below to begin!</h4>
            </div>
            <div className = "home__signup-button-container">

                <Link className = "home__signup-button home__signup-button-create"to = "/create">Create Portfolio</Link> 
                <button className = "home__signup-button home__signup-button-learn">Learn</button>
            </div>
          
        </div>
    )
}
