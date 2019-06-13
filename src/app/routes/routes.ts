// Require database functions
import validator from "validator";
import { insertDB, selectDB } from "../utilities/db_query";

export default function(app: any, db: any) {
  /**
   * @author Duncan Pierce <telmage4448@gmail.com>
   * @header <string> email [required]
   * @header <string> first_name
   * @header <string> last_name
   * @header <string> zip_code
   * @header <string> gender
   * @header <string> cc
   * @header <string> source_id
   * @header <string> ip_address
   * @header <string> utm_source
   * @header <string> utm_medium
   * @header <string> utm_campaign
   * @header <string> utm_content
   * @description Allows the third parties to send
   * email registrations via the API with the above
   * listed headers.
   */
  app.post("/register", (req: any, res: any) => {
    async function generateRegistration() {
      res.status(200).send("Your API is running");
    }
    generateRegistration();
  });
}
