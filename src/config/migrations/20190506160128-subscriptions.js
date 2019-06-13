// To use in terminal:
// db-migrate --config config/database.json -e prod

"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable(
    "subscriptions",
    {
      id: {
        type: "int",
        unsigned: true,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 11
      },
      email: { type: "char", length: 75, notNull: true, unique: true },
      first_name: { type: "char", length: 50, notNull: false },
      last_name: { type: "char", length: 50, notNull: false },
      zip_code: { type: "char", length: 50, notNull: false },
      gender: { type: "char", length: 25, notNull: false },
      cc: { type: "char", length: 40, notNull: false },
      ip_address: { type: "char", length: 32, notNull: false },
      status: { type: "char", length: 40, notNull: false },
      time_created: { type: "timestamp", notNull: false },
      time_updated: { type: "timestamp", notNull: false }
    },
    callback
  );
};

exports.down = function(db) {
  db.dropTable("subscriptions");
  return null;
};

exports._meta = {
  version: 1
};
