import React from 'react';
import {Link} from 'react-router-dom';
import {withTracker} from "meteor/react-meteor-data";
import {Alert, Avatar, Button} from 'antd';
import './header.scss';

class Header extends React.Component {

  render() {
    const welcomeMassage = this.props.currentUser ?
      <Alert style={{textAlign: 'center'}}
             message={`Добро пожаловать ${this.props.currentUser.username}`}
             type="success"/> : '';
    const logOut = this.props.currentUser ?
      <Button type="primary" onClick={() => Meteor.logout()}
              style={{display: 'block', marginLeft: '10px'}}>Выйти</Button> : '';

    return (
      <header className="header">
        <div className="header__container">
          <Link to="/">
            <img src="/assets/images/logo.png" className="header__logo"/>
            Web Store
          </Link>
          <div className="header__accounts">
            {this.props.currentUser ? (
              <>
              {/*  Вынести в отдельный компонент*/}
              {welcomeMassage}
              <Avatar size={50} style={{marginLeft: '10px'}}/>
              {logOut}
              </>
            ) : (
              <>
              {/*  Вынести в отдельный компонент*/}
              <Button className="header__button">
                <Link to="/accounts/sign-up" style={{display: 'block', textAlign: 'center'}}>
                  Sign-up
                </Link>
              </Button>
              <Button type="primary" className="header__button">
                <Link to="/accounts/sign-in" style={{display: 'block', textAlign: 'center'}}>
                  Sign-In
                </Link>
              </Button>
              </>
            )
            }

          </div>

        </div>
      </header>
    );
  }
}

export default withTracker((props) => {
  const currentUser = Meteor.user();

  return {
    currentUser,
  }
})(Header);
