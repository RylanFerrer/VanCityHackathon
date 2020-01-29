import React from 'react';
import './Styles/main.css'
import "./Components/Home/HomeHeader"
import "./Components/Home/HomeBanner"
import HomeHeader from './Components/Home/HomeHeader';
import HomeBanner from './Components/Home/HomeBanner';
function App() {
  return (
    <div >
      <HomeHeader/>
      <HomeBanner/>
    </div>
  );
}

export default App;
