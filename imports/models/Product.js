import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from 'meteor/meteor';

const Product = Class.create({
  name: 'Product',
  description: 'Description',
  price: '100',
  collection: new Meteor.Collection('products'),
  fields: {
    name: {
      type: String,
      optional: true,
    },
    description: {
      type: String,
      optional: true,
    },
    price: {
      type: Number,
      optional: true,
    },
  },
});

export default Product;
