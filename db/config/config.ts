import Mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

let database: Mongoose.Connection;

export const connect = () => {
  // add your own uri below
  const uri = "mongodb://test:test@localhost:27017/test";
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