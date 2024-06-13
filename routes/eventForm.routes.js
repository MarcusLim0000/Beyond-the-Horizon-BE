const express = require("express");
const router = express.Router();
const eventCtrl = require("../controllers/eventForm.controller")

router.post("/create", eventCtrl.createEvent);  
//http://localhost:3000/api/event/create

router.get('/:id', eventCtrl.getEvent);
//http://localhost:3000/api/event/:id



module.exports = router;