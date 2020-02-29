import React from 'react'
import {Button, Form, Input} from "antd";
import 'antd/dist/antd.css'
import {Meteor} from 'meteor/meteor';

export default class AddProductForm extends React.Component {

  state = {
    name: '',
    description: '',
    price: null,
    file: '',
  };

  handleAddProduct = () => {
    console.log(this.state.file);
    const reader = new FileReader();
    reader.onloadend = () => Meteor.call('addProduct', this.state, reader.result);
    reader.readAsBinaryString(this.state.file.originFileObj); //сделать функцию из этого

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      description: '',
      price: null,
    });
  };

  render() {
    return (
      <Form>
        <Input
          className="addproduct__input"
          addonBefore="Название товара"
          placeholder="Название товара"
          allowClear
          onChange={(e) => this.setState({name: e.target.value})}
          onPressEnter={this.handleAddProduct}
          value={this.state.name}
        />
        <Input
          className="addproduct__input"
          addonBefore="Описание товара"
          placeholder="Описание товара"
          allowClear
          onChange={(e) => this.setState({description: e.target.value})}
          onPressEnter={this.handleAddProduct}
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
        <Input type="file" onChange={(e) => this.setState({file: e.currentTarget.files})}
               style={{marginBottom: '20px', height: 'auto'}}/>
        <Button type="primary" onClick={this.handleAddProduct}>add product</Button>
      </Form>
    );
  }
}
