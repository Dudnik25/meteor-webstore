import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from "antd";
import 'antd/dist/antd.css';

export default class ProductCrad extends React.Component {

  render() {
    return (
      <Card
        title={this.props.product.name}
        bordered={false}
        style={{width: 300}}
        extra={
          this.props.link ?
            <Link to={`/products/${this.props.product._id}`}>
              Посмотреть
            </Link>
            : ''
        }
      >
        <p>{this.props.product.description}</p>
        <p>{this.props.product.price}</p>
      </Card>
    )
  }
}
