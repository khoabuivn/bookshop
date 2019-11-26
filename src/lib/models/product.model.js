var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

var productSchema = new mongoose.Schema({
  name: 'string',
  image: 'string',
  description: 'string'
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product