require("dotenv").config();

const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");

const express = require('express');
const app = express();


const port = 8003;

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })