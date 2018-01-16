const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
// var id = "5a5de70ee6a0306c0461d4f6";

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

var id = "5a5de7da2009bc181af6bc13";
if (ObjectID.isValid(id)) {
  Todo.findById(id).then(
    user => {
      if (!user) {
        return console.log("Unable to find user");
      }
      console.log("User", JSON.stringify(user, undefined, 2));
    },
    e => {
      console.log(e);
    }
  );
} else {
  console.log("Invalid ObjectID");
}
