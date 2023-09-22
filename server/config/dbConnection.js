const mongoose = require("mongoose");
module.exports = connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_URL);
    console.log(
      `Connected to the database ${connect.connection.host} ${connect.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
