import React from 'react'
import {Input, Button, Form} from "antd";
import 'antd/dist/antd.css'
import {Meteor} from 'meteor/meteor';


export default class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: null,
    }
  }

  handleAddProduct() {
    Meteor.call('addProduct', this.state);
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      description: '',
      price: null,
    })
  };

  render() {
    return (
      <Form onSubmit={this.handleAddProduct.bind(this)}>
        <Input
          className="addproduct__input"
          addonBefore="Название товара"
          placeholder="Название товара"
          allowClear
          onChange={(e) => this.setState({name: e.target.value})}
          onPressEnter={this.handleAddProduct.bind(this)}
          value={this.state.name}
        />
        <Input
          className="addproduct__input"
          addonBefore="Описание товара"
          placeholder="Описание товара"
          allowClear
          onChange={(e) => this.setState({description: e.target.value})}
          onPressEnter={this.handleAddProduct.bind(this)}
          value={this.state.description}
        />
        <Input
          className="addproduct__input"
          addonBefore="Цена товара"
          placeholder="Цена товара"
          allowClear
          onChange={(e) => this.setState({price: +e.target.value})}
          onPressEnter={this.handleAddProduct.bind(this)}
          value={this.state.price}
        />
        <Button type="primary" onClick={this.handleAddProduct.bind(this)}>add product</Button>
      </Form>
    )
  }
}