const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const socket = require("socket.io");
const Multer = require("multer");
const http = require("http");
const bodyparser = require("body-parser");
const appRoutes = require("./routes")

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// app.use("/api", appRoutes);

const mongoURI = "mongodb://127.0.0.1/FeeGram";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });



const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

