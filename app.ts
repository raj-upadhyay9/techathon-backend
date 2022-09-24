import dotenv from "dotenv";
import express,{ Express, Request, Response } from "express";
import errorHandler from "errorhandler";
import { json, urlencoded } from "body-parser";
import methodOverride from "method-override";
import logger from "morgan";

dotenv.config();

import { connect,disconnect } from './db/config/config';
import User from './db/models/user/users';

const app: Express = express();
const port = 3000 || process.env.PORT;

connect();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(errorHandler());

// app.use((req, res, next) => {

// });

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("hey");
});

app.get("/db", async (req: Request, res: Response) => {
  connect();
  try {
    let user = await User.findone('1');
    res.status(201).json(user);
    disconnect();
  }
  catch(err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
