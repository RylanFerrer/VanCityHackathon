import React from 'react';
import {Link} from 'react-router-dom'
import Donut from "../Charts/Donut"
import BarChart from '../Charts/BarChart'
const ConfirmedGraphs = () => {
    return (
        <div className = "graph">
        <h3 className = "graph__text">MY INVESTMENT:</h3>
        <BarChart/>
        <div className = "graph__reward-container">
            <Link  to = "/rewards" className = "graph__reward-text">View Round-Up Rewards</Link>
        </div>

        <h3 className = "graph__text">MY SPENDING:</h3>
        <h4 className = "graph__date">Jan 1- Jan 31</h4>
            <Donut/>
    
        <div  className = "graph__reward-container new">
            <Link  to = "/spending" className = "graph__reward-text">View My Spending Details</Link>
        </div>

        </div>
    );
}

export default ConfirmedGraphs;
