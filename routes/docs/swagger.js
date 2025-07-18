const router = require("express").Router();
const swaggerJson = require("../../swagger.json");
const swaggerUi = require("swagger-ui-express");

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerJson));

module.exports = router;
