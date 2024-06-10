const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flightForm.controller");

router.post("/create", flightCtrl.createFlight);  
//http://localhost:3000/api/flight/create

router.get('/:id', flightCtrl.getFlights);
//http://localhost:3000/api/flight/:id

router.delete('/delete/:id', flightCtrl.deleteListing);
//http://localhost:3005/api/flight/delete/id

module.exports = router;
