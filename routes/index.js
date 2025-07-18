const express = require("express");
const router = express.Router();
const getHome = require("../controllers/index");

router.get("/", getHome);
router.use("/api-docs", require("./docs/swagger"));
router.use("/contacts", require("./contacts"));

module.exports = router;
