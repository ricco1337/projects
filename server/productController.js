var app = require('./index')
var db = app.get('db')

module.exports = {


getProducts: function(req, res) {
  db.get_products(function(err, products) {
    return res.status(200).send(products)
  })
},


getProductsById: function(req, res) {
  // console.log('alert');
  // console.log('getProductsById');
  db.get_products_id([req.params.id], function(err, product) {
    // console.log('req.params.id');
    // console.log(req.params.id);
    return res.status(200).send(product)
  })
}


}
