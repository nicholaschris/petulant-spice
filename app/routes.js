// app/routes.js

// load the todo model
var ToDo = require('./models/todo');

module.exports = function(app) {
// routes

  // api
  // get all todos
  app.get('/api/todos', function(req, res) {

    // Use mongoose to get all todos in database
    ToDo.find(function(err, todos) {

        if (err) 
            res.send(err)

        res.json(todos);
    });
  });

  app.post('/api/todos', function(req, res) {

    // Create a ToDo
    ToDo.create({
        text : req.body.text,
        done: false
    }, function(err, todo) {
        if (err)
            res.send(err);

        ToDo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
  });

  app.delete('/api/todos/:todo_id', function(req, res) {
    ToDo.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err);
        ToDo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
  });

  // application
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};