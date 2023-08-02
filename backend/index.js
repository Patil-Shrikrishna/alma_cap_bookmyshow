const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors')
app.use(cors())



app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   


// 1. Boilerplate code - do we need to use only this code or can we make entirely our own code.
// 2. Can we make movie data database and it's required endpoints?


// Task:- 
// Akhilesh, Shashank, Sneta will work on frontend
// Everyone will work on backend. :)