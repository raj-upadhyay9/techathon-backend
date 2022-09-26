import express,{ Express, Request, Response } from "express";
import errorHandler from "errorhandler";
import { json, urlencoded } from "body-parser";
import methodOverride from "method-override";
import logger from "morgan";
import {connect} from './db/config/config'

require('dotenv').config();
connect();

import user from './routers/user/user';
import transaction from "./routers/transaction/transaction";
import event from './routers/event/event'
import eventRegister from "./routers/eventRegister/eventRegister";
import EventAttendance from "./routers/eventAttendance/eventAttendance";
import allowCertificate from "./routers/allowCertificate/allowCertificate";

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

app.use('/user', user);
app.use('/transaction', transaction);
app.use('/event', event);
app.use('/eventRegister', eventRegister);
app.use('/eventAttendance', EventAttendance);
app.use('/allowCertificate', allowCertificate);

// app.get("/db", async (req: Request, res: Response) => {
//   connect();
//   try {
//     let user = await User.findone('1');
//     res.status(201).json(user);
//     disconnect();
//   }
//   catch(err) {
//     console.log(err);
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
