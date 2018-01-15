const MongoClient = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDb server.");
  }
  console.log("Connected to MongoDb server.");
  //   db.collection("Todos").insertOne({
  //       text: 'Something to do',
  //       completed: false
  //   }, (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert todo", err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   });
  db.collection("Users").insertOne(
    {
      name: "Manu",
      age: 25,
      location: "Patiala"
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert users", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );
  db.close();
});
