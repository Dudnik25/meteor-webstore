import React, { Component } from 'react';
import {withTracker} from "meteor/react-meteor-data";
import Product from "../../models/Product";
import ProductCard from "./../components/ProductCard";

class ProductView extends Component {
    render() {
        return (
            <div>
              {/*не понял зачем здесь link*/}
              {this.props.product && <ProductCard product={this.props.product} link={false}/>}
            </div>
        );
    }
}

export default withTracker((props) => {
  return {
      // кавычки тут не нужны
    product: Product.findOne({"_id": props.match.params.id})
  }
})(ProductView);