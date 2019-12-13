var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    collection: "users"
  }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
