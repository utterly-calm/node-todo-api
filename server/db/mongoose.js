const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/TodoApp");
mongoose.connect("mongodb://vipul:vipul@ds259897.mlab.com:59897/todo-app");
module.exports = { mongoose };
