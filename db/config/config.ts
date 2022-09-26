import Mongoose from "mongoose";
require('dotenv').config();

let database: Mongoose.Connection;

export const connect = () => {
  // add your own uri below
  const uri = process.env.MONGODB_CONNECTION_STRING || "mongodb://test:test@localhost:27017/test";
  console.log(process.env.MONGODB_CONNECTION_STRING);
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
     authSource:"admin",
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
   });
  
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};