const mongoose = require('mongoose');


const passwordSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  url:String

});
module.exports = mongoose.model('Password',passwordSchema);