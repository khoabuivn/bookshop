var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

var productSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String
    },
    imgUrl: {
      type: String
    },
    views: {
      type: Number
    }
  },
  {
    collection: 'books'
  }
);

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
