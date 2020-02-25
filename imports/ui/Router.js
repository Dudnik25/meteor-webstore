import React from 'react';
import {Route} from 'react-router-dom';
import MainPage from './containers/MainPage';
import Cms from './containers/Cms';
import Products from './containers/Products';
import ProductView from './containers/ProductView';


const BaseRouter = () => (
  <div>
    <Route exact path='/' component={MainPage}/>
    <Route exact path='/products' component={Products}/>
    <Route exact path='/cms' component={Cms}/>
    <Route exact path='/products/:id' component={ProductView}/>
  </div>
);

export default BaseRouter;
