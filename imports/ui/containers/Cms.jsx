import React, {Component} from 'react';
import {Card, Icon} from "antd";
import 'antd/dist/antd.css'
import {withTracker} from "meteor/react-meteor-data";
import Product from "../../models/Product";
import AddProductForm from '../components/AddProductForm'

class Cms extends Component {

  handleRemoveProduct = (id) => {
    Meteor.call('removeProduct', id);
  };

  render() {
    return (
      <>
      <div style={{margin: 10}}>
        <AddProductForm/>
      </div>
      <div style={{marginTop: 10}}>
        {this.props.product && this.props.product.map((product, id) => (
          <div key={id}>
            <Card title={product.name} bordered={false} style={{width: 300}} extra={
              <Icon
                className="button__close"
                type="close-circle"
                onClick={() => this.handleRemoveProduct(product._id)}
                style={{color: 'red'}}
              />
            }>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </Card>
          </div>
        ))}
      </div>
      </>
    );
  }
}

export default withTracker(() => {
  return {
    product: Product.find().fetch()
  }
})(Cms);
