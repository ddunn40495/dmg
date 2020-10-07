// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// =======================================
//              DATABASE
// =======================================
const dataBaseVar = "your_data_base_as_a_string";
const mongoURI = "mongodb://localhost:27017/" + dataBaseVar;
const db = mongoose.connection;

// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("the connection with mongod is established");
  }
);
db.once("open", () => {
  console.log("mongo connected: ", mongoURI);
});
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));
// =======================================
//              CONTROLLER
// =======================================
const tireController = require("./controllers/tire_controller");
app.use("/", tireController);
// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
