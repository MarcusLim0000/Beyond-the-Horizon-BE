const express = require("express");
const router = express.Router();
const eventCtrl = require("../controllers/eventForm.controller");

router.post("/create", eventCtrl.createEvent);

router.get("/:id", eventCtrl.getEvent);

router.delete("/delete/:id", eventCtrl.deleteEvent);

router.put("/update/:id", eventCtrl.updateEvent);

module.exports = router;
