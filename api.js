var objection = require('objection');
var Person = require('./models/Person');

//This File Contain API's For Adding, Deleting or Listing All Users from table person
module.exports = function (app) {
  // Create new user.
  app.post('/users', function (req, res, next) {
    Person
      .query()
      .insert(req.body)
      .then(function (user) { res.send(user); })
      .catch(next);
  });
  // Edit user data.
  app.patch('/users/:id', function (req, res, next) {
    Person
      .query()
      .where('id', req.params.id)
      .patch(req.body)
      .then(function (user) { res.send(user); })
      .catch(next);
  });
  // Delete user.
  app.delete('/user/:id', function (req, res, next) {
    Person
      .query()
      .delete()
      .where('id', req.params.id)
      .then(function () { res.send({}); })
      .catch(next);
  });

   //List All Users
   app.get('/users', function (req, res, next) {
    Person
      .query()
      .then(function (users) { res.send(users); })
      .catch(next);
  });
};

