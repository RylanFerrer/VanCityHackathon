import React from 'react';
import Header from '../Home/Header'
import BottomNav from '../Nav/BottomNav'
import RewardItem from './RewardItem'
const Rewards = () => {
    return (
        <div>
            <Header title = {"Round-Up Rewards"}/>
            <div className = "rewards">
                <h3 className = "rewards__info">Get rewarded for rounding up your purchases! Receive<span className = "rewards__info-bold"> 15%</span> off your next purchase at your favorite local business every <span className = "rewards__info-bold">$500</span> in Round-Up savings!</h3>
                <h3 className = "rewards__text">Select business to learn more!</h3>
                <RewardItem title = "Charity Donation" description = "Donate to any local charity and Vancity will match up to $150 on your behalf!"/>
                <RewardItem title = "Ben & Jen’s Burger Bar" description = "Receive 15% off your next bill at Ben & Jen’s Burger Bar. Come enjoy a classic burger or . . . . " />
                <RewardItem title = "Half Moon Ceramic Shop" description = "Receive 15% off your purchase at Half Moon Ceramic Shop. Locally crafted ceramics from Van . . . . "/>
                <RewardItem title = "Van Sweets Jammery" description = "Receive 15% off your purchase at Van Sweets Jammery. Grown and made in our downtown  . . . . "/>
            </div>
            <BottomNav/>
        </div>
    );
}

export default Rewards;
