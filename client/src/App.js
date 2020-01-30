import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './Styles/main.css'
import AccountPage from './Components/Accounts/AccountPage'
import RoundUpPage from './Components/RoundUp/RoundUpPage'
import ConfirmPage from './Components/Confirm/ConfirmPage'
import Rewards from './Components/Rewards/Rewards'
function App() {
  return (
    <Switch>
      <Route path = "/" exact component = {AccountPage}/>
      <Route path = "/create" component = {RoundUpPage}/>
      <Route path = "/confirm" component = {ConfirmPage}/>
      <Route path = "/rewards" component = {Rewards}/>
    </Switch>
  );
}

export default App;
