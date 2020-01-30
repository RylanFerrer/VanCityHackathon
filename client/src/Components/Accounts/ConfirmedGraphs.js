import React from 'react';
import {Link} from 'react-router-dom'
import Graph from '../../Assets/Images/graph.svg'
const ConfirmedGraphs = () => {
    return (
        <div className = "graph">
        <h3 className = "graph__text">MY INVESTMENT:</h3>
        <div className = "graph__reward-container">
            <Link  to = "/rewards" className = "graph__reward-text">View Round-Up Rewards</Link>
        </div>

        <h3 className = "graph__text">MY SPENDING:</h3>
        <h4 className = "graph__date">Jan 1- Jan 31</h4>
        <div className = "account__graph-container">
            <img src = {Graph} alt = "graph"/>
        </div>
        <div  className = "graph__reward-container">
            <Link className = "graph__reward-text">View My Spending Details</Link>
        </div>

        </div>
    );
}

export default ConfirmedGraphs;
