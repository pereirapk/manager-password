const { Router } = require('express');
const PasswordController = require('./controllers/PasswordController');
const routes = Router();

routes.get('/password',PasswordController.index)
routes.post('/savePassword',PasswordController.store);
module.exports = routes;