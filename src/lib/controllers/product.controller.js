var Product = require('../models/product.model');

module.exports.get = async function(req, res, next) {
/*  var perPage = 6;
  var page = parseInt(req.query.page) || 1; // operator || to choose one of these two

  var start = (page - 1) * perPage;
  var end = page * perPage;

  var drop = (page - 1) * perPage;
  var loProducts = db.get('products');
  var products = loProducts.drop(drop).take(perPage).value();
  var productsLength = Math.round(loProducts.size() / perPage);

  res.render('products/index', {
    // products: db.get('products').value().slice(start, end)
    products: products,
    limit: productsLength,
    i: page
  });*/
  try {
    var products = await Product.find();
    products.foo();
    res.render('products/index', {
      products: products
    })
  } catch(error) {
    next(error);
  }
}