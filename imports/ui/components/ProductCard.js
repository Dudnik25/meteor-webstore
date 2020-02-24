import React from 'react';
import {Card, Button} from "antd";
import 'antd/dist/antd.css'


export default class ProductCrad extends React.Component {

  render() {
    return (
      <Card
        title={this.props.product.name}
        bordered={false}
        style={{width: 300}}
        extra = {
          <Button type="link" href={`/products/${this.props.product._id}`}>
            Посмотреть
          </Button>
        }
      >
        <p>{this.props.product.description}</p>
        <p>{this.props.product.price}</p>
      </Card>
    )
  }
}