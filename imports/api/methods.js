import {Meteor} from 'meteor/meteor';
import Product from "../models/Product";
import Images from '../models/Images';

Meteor.methods({
  'addProduct'({name, description, price}) {
        let product = new Product({
      name: name,
      description: description,
      price: price,
    });
    product.save();
  },

  'removeProduct'(id) {
    Product.remove(id);
  },
});
