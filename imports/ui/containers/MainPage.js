import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MainPage extends Component {

  render() {
    return (
      <>
      <h1 style={{textAlign: 'center'}}>Главная</h1>
      <Link to="/products">
        Products
      </Link>
      <Link to="/cms">
        Cms
      </Link>
      </>
    );
  }
}
