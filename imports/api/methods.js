import {Meteor} from 'meteor/meteor';
import Product from "../models/Product";
import Images from '../models/Images';
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
  'addProduct'({name, description, price, file}, binary) {
    let product = new Product({
      name: name,
      description: description,
      price: price,
    });
    product.save();

    Images.write(Buffer.from(binary, 'binary'), {
      name: file.name,
      type: file.type,
      meta: {
        productId: product._id
      }
    })

  },

  'removeProduct'(id) {
    Product.remove(id);
  },

  'registerUser'({username, email, password}, callback) {
    //  Тут проверки данных
    Accounts.createUser({
      email: email,
      username: username,
      password: password
    }, callback);
  },
});
