const express = require("express");
const router = express.Router();
const hotelCtrl = require("../controllers/hotelForm.controller")

router.post("/create", hotelCtrl.createHotel);  
//http://localhost:3000/api/hotel/create

router.get('/:id', hotelCtrl.getHotel);
//http://localhost:3000/api/hotel/:id


module.exports = router;
