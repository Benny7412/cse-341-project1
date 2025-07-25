const swaggerAutogen = require("swagger-autogen")();

const docs = {
  info: {
    title: "Contacts API",
    description: "API for the Contacts API",
  },
  host: "cse-341-project1-3e4f.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, docs);
