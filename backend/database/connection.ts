const { MongoClient } = require("mongodb");
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }
      
      dbConnection = db.db(process.env.DATA_BASE);
      console.log("Successfully connected to MongoDb");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};