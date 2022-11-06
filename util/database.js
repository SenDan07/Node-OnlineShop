require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    }
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
