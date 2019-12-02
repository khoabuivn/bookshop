import { connect, Schema, model } from 'mongoose';

connect(process.env.MONGO_URL, {useNewUrlParser: true});

var bookSchema = Schema({
  name: String,
  description: String,
  imgUrl: String,
  views: Number
})

var Book = model('Book', bookSchema);