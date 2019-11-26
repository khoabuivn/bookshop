var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

var userSchema = new mongoose.Schema({
  name: 'string',
  phone: 'string',
  email: 'string',
  password: 'string'
});

var User = mongoose.model('User', userSchema);

module.exports = User