const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flightForm.controller");

router.post("/create", flightCtrl.createFlight);

router.get("/:id", flightCtrl.getFlights);

router.delete("/delete/:id", flightCtrl.deleteFlight);

router.put("/update/:id", flightCtrl.updateFlight);

module.exports = router;
