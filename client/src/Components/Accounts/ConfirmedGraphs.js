import React from 'react';
import Graph from '../../Assets/Images/graph.svg'
const ConfirmedGraphs = () => {
    return (
        <div className = "graph">
        <h3 className = "graph__text">MY INVESTMENT:</h3>
        <h4 className = "graph__reward-text">View Round-Up Rewards</h4>
        <h3 className = "graph__text">MY SPENDING:</h3>
        <h4 className = "graph__date">Jan 1- Jan 31</h4>
        <div className = "account__graph-container">
            <img src = {Graph} alt = "graph"/>
        </div>
        <h4 className = "graph__reward-text">View My Spending Details</h4>
        </div>
    );
}

export default ConfirmedGraphs;
