// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables
var tables = [];

// Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Create New tables
app.post("/api/reserve", function(req, res) {

  var newTable = req.body;

  tables.push(newTable);

});

// Starts the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
