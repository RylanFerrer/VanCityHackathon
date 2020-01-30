import React from 'react';

const RewardItem = (props) => {
    const {title, description,image} = props
    return (
        <div className = "rewards__item">
            <img  src = {image} alt = {title} className = "rewards__item-img"></img>
            <div className = "rewards__item-text-container">
                <h3 className = "rewards__item-title">{title}</h3>
            <h4 className = "rewards__item-description">{description}</h4>
            </div>
        </div>
    );
}

export default RewardItem;
