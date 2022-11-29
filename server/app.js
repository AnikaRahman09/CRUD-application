require("dotenv").config();

const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");

const express = require('express');
const app = express();
const cors = require("cors");
const router = require("./routes/router");


const port = 8003;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })