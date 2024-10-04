const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database: Constituent Service");
    app.listen(process.env.PORT, () => {
      console.log("Server started at port: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(
      "Some error occured while connecting to database: constituent_service"
    );
  });
