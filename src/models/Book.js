var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

var bookSchema = mongoose.Schema({
  name: String,
  description: String,
  imgUrl: String
})

var Book = mongoose.model('Book', productSchema);