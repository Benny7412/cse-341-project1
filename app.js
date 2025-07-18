//server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

//body parser
const bodyParser = require("body-parser");

//routes
const contactsRoutes = require("./routes/contacts");
const indexRoutes = require("./routes/index");
const docsRoutes = require("./routes/docs/swagger");

//swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

//database
const mongodb = require("./routes/data/database");

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })

  //routes
  .use("/", indexRoutes)
  .use("/contacts", contactsRoutes)
  .use("/api-docs", docsRoutes);

process.on("uncaughtException", (err, origin) => {
  console.log(
    process.stderr.id,
    `Caught exception ${err}\n` + `Exception origin: ${origin}`
  );
});

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Database and server connected on port ${PORT}`);
    });
  }
});
