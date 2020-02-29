import React, {Component} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import Product from "../../models/Product";
import ProductCard from "../components/ProductCard";

class Products extends Component {
  render() {
    return (
      <div style={{marginTop: 10}}>
        {this.props.product && this.props.product.map((product, id) => (
          <div key={id}>
            <ProductCard
              product={product}
              link={true}
            />
          </div>
        ))
        }
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    product: Product.find().fetch()
  }
})(Products);
