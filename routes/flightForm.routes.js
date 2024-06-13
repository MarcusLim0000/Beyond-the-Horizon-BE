const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flightForm.controller");

router.post("/create", flightCtrl.createFlight);  
//http://localhost:3000/api/flight/create

router.get('/:id', flightCtrl.getFlights);
//http://localhost:3000/api/flight/:id

router.delete('/delete/:id', flightCtrl.deleteFlight);
//http://localhost:3000/api/flight/delete/:id

// New route for updating a flight
router.put('/update/:id', flightCtrl.updateFlight);
//http://localhost:3000/api/flight/update/:id

module.exports = router;
