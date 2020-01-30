import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './Styles/main.css'
import AccountPage from './Components/Accounts/AccountPage'
import RoundUpPage from './Components/RoundUp/RoundUpPage'
import ConfirmPage from './Components/Confirm/ConfirmPage'
function App() {
  return (
    <Switch>
      <Route path = "/" exact component = {AccountPage}/>
      <Route path = "/create" component = {RoundUpPage}/>
      <Route path = "/confirm" component = {ConfirmPage}/>
    </Switch>
  );
}

export default App;
