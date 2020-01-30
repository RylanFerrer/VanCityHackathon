import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './Styles/main.css'
import AccountPage from './Components/Accounts/AccountPage'
import RoundUpPage from './Components/RoundUp/RoundUpPage'
function App() {
  return (
    <Switch>
      <Route path = "/" exact component = {AccountPage}/>
      <Route path = "/create" component = {RoundUpPage}/>
    </Switch>
  );
}

export default App;
