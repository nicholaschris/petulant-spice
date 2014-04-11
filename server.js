// server.js

// Set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// configuration

mongoose.connect('mongodb://<username>:<password>@novus.modulusmongo.net:27017/esAwe9xy')

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

});

// define model
var ToDo = mongoose.model('Todo', {
    text : String
});

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




app.listen(8080);
console.log("App listening on port 8080")