const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contactsRoutes = require("./routes/contacts");
const indexRoutes = require("./routes/index");

const mongodb = require("./routes/data/database");
const PORT = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })

  .use("/", indexRoutes)
  .use("/contacts", contactsRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Database and server connected on port ${PORT}`);
    });
  }
});
