const mongodb = require("../routes/data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const contacts = await mongodb
    .getDatabase()
    .db("project1")
    .collection("contacts")
    .find()
    .toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(contacts);
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = await mongodb
    .getDatabase()
    .db("project1")
    .collection("contacts")
    .find({ _id: userId });

  contact.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users[0]);
  });
};
module.exports = {
  getAll,
  getSingle,
};
