//import db
const db = require("./db");
//set up the express functions/server via a const
const express = require("express");
//creating a local port
const port = 3000;

//console.log(db);

const { cities } = require("./db");
//console.log(citiesDB);

//create express server
const server = express();
server.listen(port, () => {
  //Logging that you've connected to the local site
  console.log(`You are connected to port ${port}`);
});

//Get your created data from your data bases
// server.get("/", (req, res) => {
//   res.send(db);
// });

server.get("/", (req, res) => {
  res.send(cities);
});
