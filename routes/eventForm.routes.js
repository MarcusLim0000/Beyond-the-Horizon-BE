const express = require("express");
const router = express.Router();
const eventCtrl = require("../controllers/eventForm.controller")

router.post("/create", eventCtrl.createEvent);  
//http://localhost:3000/api/listing/create



module.exports = router;