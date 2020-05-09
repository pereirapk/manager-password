const Password = require('../models/Password');

module.exports = {
  async store(req, res) {
    const { name, username, password, url } = req.body;
    let pass = await Password.findOne({ name });
    if (!pass) {
      pass = await Password.create({
        name,
        username,
        password,
        url,
      });
    }
    return res.json(pass);
  },
  async index(req, res) {
    const { name } = req.query;
    let password;
    if (name) {
      password = await Password.find({ name });
    }
    else {
      password = await Password.find();
    }
    return res.json(password);
  },
  async update(){

  },
  async destroy(){

  }
}