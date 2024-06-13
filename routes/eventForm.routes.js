const express = require("express");
const router = express.Router();
const eventCtrl = require("../controllers/eventForm.controller");

router.post("/create", eventCtrl.createEvent);
//http://localhost:3000/api/event/create

router.get('/:id', eventCtrl.getEvent);
//http://localhost:3000/api/event/:id

router.delete('/delete/:id', eventCtrl.deleteEvent);
//http://localhost:3000/api/event/delete/:id

// Update route for events
router.put('/update/:id', eventCtrl.updateEvent);
//http://localhost:3000/api/event/update/:id

module.exports = router;
