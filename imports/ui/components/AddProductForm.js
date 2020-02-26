import React from 'react'
import {Button, Form, Input, Upload, Icon,  message} from "antd";
import 'antd/dist/antd.css'
import {Meteor} from 'meteor/meteor';
import Images from '../../models/Images';

export default class AddProductForm extends React.Component {

  state = {
    name: '',
    description: '',
    price: null,
    file: '',
  };

  imageList = [];

  handleAddProduct = () => {
/*    this.imageList.forEach((image) => {
      Images.insert({
        file: image,
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);
    });*/

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
    this.imageList = null;
  };

  uploadImage = (e) => {
    if (e.file.status === 'done') {
      message.success(`${e.file.name} file uploaded successfully`);
      this.imageList.push(e.file);
      console.log(this.imageList);
    } else if (e.file.status === 'error') {
      message.error(`${e.file.name} file upload failed.`);
    }
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
        <Upload
          defaultFileList={this.imageList}
          listType="picture"
          className="upload-list-inline"
          onChange={(e) => this.setState({file: e.file})}
        >
          <Button>
            <Icon type="upload" /> Upload
          </Button>
        </Upload>
        <Button type="primary" onClick={this.handleAddProduct}>add product</Button>
      </Form>
    )
  }
}
