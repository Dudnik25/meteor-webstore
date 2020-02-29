import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from './containers/MainPage';
import Cms from './containers/Cms';
import Products from './containers/Products';

import ProductView from './containers/ProductView';
import Accounts from "./containers/Accounts.jsx";

import Header from './components/Header/Header';


const BaseRouter = () => (
  <>
  {/* Переделать MainPage и вынести туда Header */}
  <Header/>
  <Switch>
    <Route exact path='/' component={MainPage}/>
    <Route path='/products' component={Products}/>
    <Route path='/accounts' component={Accounts}/>
    <Route path='/cms' component={Cms}/>
    <Route path='/products/:id' component={ProductView}/>
  </Switch>
  </>
);

export default BaseRouter;
