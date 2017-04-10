//var mongoose = require('mongoose');
//
//var Todo = mongoose.model('Todo', {
//  text: {
//    type: String,
//    required: true,
//    minlengh: 1,
//    trim: true    
//  },
//  commpleted: {
//    type: Boolean,
//    default: false
//  },
//  completedAt: {
//    type: Number,
//    default: null
//  }  
//});

//module.exports = {Todo};

var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// Make a new user model
// email - require it -trim it -set type = string - set min length of 1

//var otherTodo = new Todo({
//  text: 'Something to do'
//});
//otherTodo.save().then((doc) => {
//  console.log(JSON.stringify(doc, undefined, 2));
//}, (e) => {
//  console.log('Unable to save todo', e)
//});