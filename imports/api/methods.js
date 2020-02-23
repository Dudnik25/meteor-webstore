import {Meteor} from 'meteor/meteor';

import Product from "../models/Product";

Meteor.methods({
    'addProduct'(name) {
        let product = new Product({
            name: name,
        });
        product.save();
    },
});