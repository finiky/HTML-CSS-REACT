const { register } = require("../repositories/person.repository");
const express = require("express");
const router = express.Router();

router.post("/register", register);

module.exports = router;