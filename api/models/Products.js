/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	 id: { type: 'string', columnName: '_id' },
    prod_name: {type:'string'},
    prod_desc: {type:'string'},
    prod_price: {type:'number'},
    updated_at: {type:Date}
	
  },
  datastore:'mongodb'

};

