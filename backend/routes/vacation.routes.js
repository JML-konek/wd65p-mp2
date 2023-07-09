const { isAuth } = require('../auth/auth');

// vacation.routes.js
module.exports = app => {
  const vacations = require('../controllers/vacation.controller');

  let router = require('express').Router();

  // create new vacation
  router.post('/', isAuth, vacations.create);

  // retrieve all vacations
  router.get('/', vacations.findAll);

  // retrive one vacation via id
  router.get('/:id', vacations.findOne);

  // update one vacation
  router.put('/:id', isAuth, vacations.update);

  // delete all vacations
  router.delete('/', isAuth, vacations.deleteAll);

  // delete one vacation via id
  router.delete('/:id', isAuth, vacations.deleteOne);

  // use the router
  app.use('/api/vacations', router);

  // curl -l <address> --> GET
  // curl -X POST|PUT|DELETE <address>
};

// :discussion
// entity ---> model
// MVC-R
// Model    - View        - Controller     - Routes
// DB Table - Pages (SPA) - Business Logic - Address/Endpoint
