require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 10000;

app.use(cors()); // middleware
app.use(express.json()); // middleware

// testing route
app.get("/", async (request, response) => {
  response.status(200).json({ message: "Hello I am working" });
});

//routes

// start the server
app.listen(port, () => {
  console.log(`Server Connected to port: ${port}`);
});
