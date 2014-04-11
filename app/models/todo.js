// app/models/todo.js

  // load mongoose
  var mongoose = require('mongoose')

  module.exports = mongoose.model('ToDo', {
    text : String,
    done : Boolean
  });