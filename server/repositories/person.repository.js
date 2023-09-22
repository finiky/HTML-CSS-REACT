const personModel = require("../models/personModel");

const register = async (request, response) => {
  const { firstName, lastName, age } = request.body;
  if (!firstName || !lastName || !age) {
    return response
      .satus(400)
      .json({ error: "First name, last name and age are required" });
  }
  if (
    typeof age !== "number" ||
    typeof firstName !== "string" ||
    typeof lastName !== "string"
  ) {
    return response.status(400).json({
      error:
        "First name and last name should only contain letters and age should only contain a number",
    });
  }
  const newPerson = await personModel.create({ firstName, lastName, age });
  if (newPerson) {
    return response.status(201).json(newPerson);
  }
};

module.exports = {
  register,
};
