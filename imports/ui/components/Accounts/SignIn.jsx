import React from 'react';
import {Button, Form, Input, message} from 'antd';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

export default class SignIn extends React.Component {

  state = {
    user: '',
    password: '',
    message: '',
  };
  baseState = this.state;

  handleInput = (e) => {
    if (typeof this.state[e.currentTarget.name] !== "undefined") {
      this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }
  };

  handelSubmit = (e) => {
    e.preventDefault();

    if (this.state.user && this.state.password) {
      Meteor.loginWithPassword(
        this.state.user,
        this.state.password,
        error => {
          if (error) {
            this.setState({message: error.reason});
          } else {
            this.setState({message: ''});
            message.success('Вы успешно вошли с систему');
            this.resetForm();
            this.props.history.push('/');
          }
        }
      );
    } else {
      this.setState({message: 'Заполните поля'});
    }
  };

  resetForm = () => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <>
      <Form style={{
        maxWidth: '800px',
        margin: '60px auto',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '10px'
      }} method="POST" onSubmit={(e) => {
        this.handelSubmit(e)
      }}>
        <Input style={{marginBottom: '20px'}} name="user" type="text" placeholder="Логин/Email" value={this.state.user}
               onChange={(e) => this.handleInput(e)}/>
        <Input style={{marginBottom: '20px'}} name="password" type="password" placeholder="Пароль"
               value={this.state.password} onChange={(e) => this.handleInput(e)}/>
        <Button block type="primary" htmlType="submit" style={{marginBottom: '20px'}} name="submit">
          Войти
        </Button>
        <div style={{width: "100%", textAlign: "center", color: "red"}}>{this.state.message}</div>
      </Form>
      </>
    );
  }
}
