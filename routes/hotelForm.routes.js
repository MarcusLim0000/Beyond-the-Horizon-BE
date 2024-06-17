const express = require("express");
const router = express.Router();
const hotelCtrl = require("../controllers/hotelForm.controller");

router.post("/create", hotelCtrl.createHotel);

router.get("/:id", hotelCtrl.getHotel);

router.delete("/delete/:id", hotelCtrl.deleteHotel);

router.put("/update/:id", hotelCtrl.updateHotel);

module.exports = router;
