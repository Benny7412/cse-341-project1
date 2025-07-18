const express = require("express");
const router = express.Router();
const { validateObjectId } = require("../utilities");

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll);
router.get("/:id", validateObjectId, contactsController.getSingle);

router.post("/", contactsController.createContact);
router.put("/:id", validateObjectId, contactsController.updateContact);
router.delete("/:id", validateObjectId, contactsController.deleteContact);

module.exports = router;
