/**
 * @Author Duncan Pierce
 * @description
 *    The Headlinerr API starts here. Abandon all hope ye
 *    who dislike typescript.
 * @usage npm run bmf
 */
import bodyParser from "body-parser";
import express from "express";
import routes from "./app/routes/routes";
import "./config/_env";
import connection from "./config/db";

const app: any = express();
const port: number = 9001;

app.use(bodyParser.urlencoded({ extended: true }));

routes(app, connection);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("Running on port:" + port);
  // tslint:disable-next-line:no-console
  console.log("Basic Typescript API");
});
