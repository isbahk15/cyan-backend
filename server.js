const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const hostName = process.env.HOSTNAME || localhost;
const port = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("check URI");
    }
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });
    
    console.log("Mongo Atlas successfully connected");
  } catch (err) {
    console.error("Mongo Atlas connection error:", err);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("This is the Cyan API");
});

app.listen(port, () => {
  console.log(`Cyan server is running at http://${hostName}:${port}/`);
  console.log("working!");
});
