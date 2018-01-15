// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDb server.");
  }
  console.log("Connected to MongoDb server.");
  console.log("Todos");
  // db
  //   .collection("Todos")
  //   .find({_id: new ObjectID('5a5c5eb5f84aed9cd8e0b5a3')})
  //   .toArray()
  //   .then(docs => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch(err => {
  //     console.log("Unable to fetch todos", err);
  //   });

  // db
  //   .collection("Todos")
  //   .find()
  //   .count()
  //   .then(count => {
  //     console.log(`Todos count: ${count}`);
  //   })
  //   .catch(err => {
  //     console.log("Unable to count todos", err);
  //   });

  db
    .collection("Users")
    .find({name: "Manu"})
    .toArray()
    .then(docs => {
      console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch(err => {
      console.log("Unable to find users", err);
    });
  db.close();
});
