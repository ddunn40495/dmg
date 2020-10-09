// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// const cors = require("cors");
// =======================================
//              MIDDLEWARE
// =======================================
require("dotenv").config();
app.use(express.static("public"));
app.use(express.json());

// const whitelist = ["http://localhost:3000", "http://localhost:3004"];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) >= 0) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// app.use(cors(corsOptions));

// =======================================
//              DATABASE
// =======================================
const port = process.env.PORT || 3003;
const mongoURI = process.env.MONGODB_URI;
const db = mongoose.connection;
const dbName = process.env.DBNAME;

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
  console.log("mongo connected: ", dbName);
});
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));
// =======================================
//          CONTROLLERS
// =======================================

const tireController = require("./controllers/tire_controller.js");
app.use("/", tireController);

app.get("/", (req, res) => {
  const test = "yup";
  res.send(`does it work???? ${test}`);
});
// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
