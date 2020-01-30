import React from 'react';

const RewardItem = (props) => {
    const {title, description} = props
    return (
        <div className = "rewards__item">
            <div className = "rewards__item-img"></div>
            <div className = "rewards__item-text-container">
                <h3 className = "rewards__item-title">{title}</h3>
            <h4 className = "rewards__item-description">{description}</h4>
            </div>
        </div>
    );
}

export default RewardItem;
