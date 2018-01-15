const MongoClient = require("mongodb");
// const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  // db
  //   .collection("Todos")
  //   .findOneAndUpdate(
  //     { _id: new ObjectID("5a5c6618f84aed9cd8e0b682") },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     { returnOriginal: false }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });
  db
    .collection("Users")
    .findOneAndUpdate(
      {
        _id: new MongoClient.ObjectID("5a5c6274f5355003002dba92")
      },
      {
        $set: {
          name: "Chulbul Updated"
        },
        $inc:{
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
  // db.close();
});
