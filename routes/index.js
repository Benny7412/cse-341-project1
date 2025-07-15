const express = require("express");
const router = express.Router();

const getHome = require("../controllers/index");

router.get("/", (req, res) => getHome(req, res));

module.exports = router;
