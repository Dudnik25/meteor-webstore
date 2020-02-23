import React from 'react';
import {Route} from 'react-router-dom';
import MainPage from './containers/MainPage'
import Products from './containers/Products'
import ProductView from './containers/ProductView'


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/products/:id' component={ProductView}/>
    </div>
);

export default BaseRouter;