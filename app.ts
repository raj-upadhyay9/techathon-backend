import dotenv from "dotenv";
import express,{ Express, Request, Response } from "express";
import errorHandler from "errorhandler";
import { json, urlencoded } from "body-parser";
import methodOverride from "method-override";
import logger from "morgan";

dotenv.config();

const app: Express = express();
const port = 3000 || process.env.PORT;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
