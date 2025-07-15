// TO INSERT DATA RUN: node insertData.js

const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

// BUILDING INSERT DATA
const contactsData = [
  {
    firstName: "John",
    lastName: "Man",
    email: "john.man@example.com",
    favoriteColor: "Blue",
    birthday: new Date("1999-10-13"),
  },
  {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    favoriteColor: "Red",
    birthday: new Date("2000-10-22"),
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    favoriteColor: "Green",
    birthday: new Date("2001-10-16"),
  },
];

// INSERT DATA
async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("project1");

    // CLEAR ALL PREVIOUS DATA
    await db.collection("contacts").deleteMany({});

    // INSERT NEW DATA
    const result = await db.collection("contacts").insertMany(contactsData);
    console.log(
      `${result.insertedCount} contacts inserted with IDs:`,
      result.insertedIds
    );
  } catch (e) {
    console.error("Error inserting data:", e);
  } finally {
    await client.close();
  }
}

run();
