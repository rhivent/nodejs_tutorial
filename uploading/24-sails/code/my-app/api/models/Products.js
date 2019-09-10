/**
 * Products.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {    
        productName: {
          type: 'string',
          description: 'Name of a category, like: Electronics, Foods',
          required: true
        },
        imageURL: {
          type: 'string',
          description: 'image web link',
          required: false 
        },
        categoryID: {
          type: 'string',
          description: "category's ID",
          required: true
        },
        unit: {
          type: 'string',
          description: "Products's unit",
          required: false
        },
        price: {
          type: 'number',
          description: 'Price of a Product',
          required: false
        },
    },      

};

