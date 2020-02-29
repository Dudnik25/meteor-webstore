import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';


class MainPage extends Component {

  render() {
    return (
      <>
      <h1 style={{textAlign: 'center', marginBottom: '60px', marginTop: '60px'}}>Главная</h1>
      <Link to="/products" style={{display: 'block', marginBottom: '20px', textAlign: 'center'}}>
        Products
      </Link>
      <Link to="/cms" style={{display: 'block', marginBottom: '20px', textAlign: 'center'}}>
        Cms
      </Link>
      </>
    );
  }
}

export default withTracker((props) => {
  const currentUser = Meteor.user();

  return {
    currentUser,
  }
})(MainPage);
