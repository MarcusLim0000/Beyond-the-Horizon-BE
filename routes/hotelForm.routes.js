const express = require("express");
const router = express.Router();
const hotelCtrl = require("../controllers/hotelForm.controller");

router.post("/create", hotelCtrl.createHotel);
//http://localhost:3000/api/hotel/create

router.get('/:id', hotelCtrl.getHotel);
//http://localhost:3000/api/hotel/:id

router.delete('/delete/:id', hotelCtrl.deleteHotel);
//http://localhost:3000/api/hotel/delete/:id

// Update route for hotels
router.put('/update/:id', hotelCtrl.updateHotel);
//http://localhost:3000/api/hotel/update/:id

module.exports = router;

