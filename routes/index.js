const express = require("express");
const router = express.Router();
const getHome = require("../controllers/index");

router.use("/", require("./docs/swagger"));

router.get("/", (req, res) => {
  //#swagger.tags=['Hello World']
  res.send("Hello World");
});

router.use("/contacts", require("./contacts"));

module.exports = router;
