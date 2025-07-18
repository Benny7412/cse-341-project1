const swaggerAutogen = require("swagger-autogen")();

const docs = {
  info: {
    title: "Contacts API",
    description: "API for the Contacts API",
  },
  host: "localhost:8080",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, docs);
