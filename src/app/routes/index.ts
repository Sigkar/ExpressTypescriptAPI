import { Connection } from "mysql";
import routes from "./routes";

// Return index to server
export default function(app: Express.Application, db: Connection) {
   // connect to the DB and keep alive
   db.connect();
   // Load routes
   routes(app, db);
}
