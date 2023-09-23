require("dotenv").config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.CONNECTION_URL);
const connectDb = async () => {
  try {
    await client.connect();
    const databaseList = await client.db().admin().listDatabases();
    console.log(`Connected to database: ${databaseList.databases[1].name}`);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

connectDb();
