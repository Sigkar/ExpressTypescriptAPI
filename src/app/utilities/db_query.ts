/**
 * @author Duncan Pierce <telmage4448@gmail.com>
 * @param {string} query
 */
export async function selectDB(query: any, db: any) {
  try {
    const results = await db.query(query, (error: any) => {
      if (error) {
        return [{ ran: false }, { error }];
      }
      return [{ ran: true }, { results }];
    });
  } catch (e) {
    return [{ ran: false }, { error: e }];
  }
}

/**
 * @author Duncan Pierce <telmage4448@gmail.com>
 * @param {string} query
 * @param {array} data
 * @warning
 *  This is deprecated and will be removed later.
 */
export async function insertDB(query: any, data: any, db: any) {
  try {
    await db.query(query, data, (error: any, results: any, fields: any) => {
      if (error) {
        return [{ ran: false }, { error }];
      }
      return [{ ran: true }, { results }, { fields }];
    });
  } catch (e) {
    return [{ ran: false }, { error: e }];
  }
}
