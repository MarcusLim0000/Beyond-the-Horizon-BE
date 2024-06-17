const express = require("express");
const router = express.Router();
const holidayCtrl = require("../controllers/holidayForm.controller");

router.post("/create", holidayCtrl.createHoliday);

router.get("/:id", holidayCtrl.getHoliday);

router.delete("/delete/:id", holidayCtrl.deleteHoliday);

router.put("/update/:id", holidayCtrl.updateHoliday);

module.exports = router;
