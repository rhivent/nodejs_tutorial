/**
 * Categories.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {    
    attributes: {    
        categoryName: {
          type: 'string',
          description: 'Name of a category, like: Electronics, Foods',
          required: true
        },
        description: {
          type: 'string',
          description: 'a description',
          required: false
        },

    },      
};

