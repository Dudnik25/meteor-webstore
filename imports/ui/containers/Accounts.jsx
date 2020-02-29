import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUp from '../components/Accounts/SignUp';
import SignIn from '../components/Accounts/SignIn';

export default class Accounts extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/accounts/sign-up' component={SignUp}/>
        <Route path='/accounts/sign-in' component={SignIn}/>
      </Switch>
    );
  }
}
