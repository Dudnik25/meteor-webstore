import React from 'react';
import {Button, Form, Input, message} from 'antd';

export default class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    email: '',
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

    if (this.state.username && this.state.password && this.state.email) {
      Meteor.call('registerUser', {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }, (error) => {
        if (error) {
          this.setState({message: error.reason});
        } else {
          this.setState({message: ''});
          message.success('Вы успешно зарегистрированы');
          Meteor.loginWithPassword(
            this.state.username,
            this.state.password,
            error => {
              if (error) {
                this.setState({message: error.reason});
              } else {
                this.setState({message: ''});
              }
            });
          this.resetForm();
          this.props.history.push('/');
        }
      });
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
      }} onSubmit={(e) => {
        this.handelSubmit(e)
      }}>
        <Input style={{marginBottom: '20px'}} name="username" type="text" placeholder="Логин"
               value={this.state.username} onChange={(e) => this.handleInput(e)}/>
        <Input style={{marginBottom: '20px'}} name="password" type="password" placeholder="Пароль"
               value={this.state.password} onChange={(e) => this.handleInput(e)}/>
        <Input style={{marginBottom: '20px'}} name="email" type="text" placeholder="Email" value={this.state.email}
               onChange={(e) => this.handleInput(e)}/>
        <Button block type="primary" htmlType="submit" style={{marginBottom: '20px'}} name="submit">
          Зарегистрироватся
        </Button>
        <div style={{width: "100%", textAlign: "center", color: "red"}}>{this.state.message}</div>
      </Form>
      </>
    );
  }
}
