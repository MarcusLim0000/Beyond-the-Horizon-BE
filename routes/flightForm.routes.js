const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flightForm.controller");
const hotelCtrl = require("../controllers/hotelForm.controller")

router.post("/create", flightCtrl.createFlight);  
//http://localhost:3000/api/listing/create

router.post("/create", hotelCtrl.createHotel);  
//http://localhost:3000/api/listing/create



module.exports = router;
