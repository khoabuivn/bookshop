var Product = require('../../models/product.model');

module.exports.get = async function(req, res) {
  var products = await Product.find();

  res.status(200).json(products)
}

module.exports.postCreate = async function(req, res) {
  var product = await Product.create(req.body);
  res.json(product)
};