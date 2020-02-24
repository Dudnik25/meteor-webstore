import React, { Component } from 'react';
import {withTracker} from "meteor/react-meteor-data";
import Product from "../../models/Product";
import ProductCard from "./../components/ProductCard";

class ProductView extends Component {

    render() {
      {this.props.product && console.log(this.props.product.name)}
        return (
            <div>
              {this.props.product && <ProductCard product={this.props.product} link={false}/>}
            </div>
        );
    }
}

export default withTracker((props) => {
  return {
    product: Product.findOne({"_id": props.match.params.id})
  }
})(ProductView);