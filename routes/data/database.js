const dotenv = require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;

let database;
const initDb = (callback) => {
  if (database) {
    console.log("Database already initialized");
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw new Error("Database not initialized");
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase,
};
