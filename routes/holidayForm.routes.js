const express = require("express");
const router = express.Router();
const holidayCtrl = require("../controllers/holidayForm.controller");

router.post("/create", holidayCtrl.createHoliday);  
//http://localhost:3000/api/holiday/create

router.get('/:id', holidayCtrl.getHoliday);
//http://localhost:3000/api/holiday/:id

router.delete('/delete/:id', holidayCtrl.deleteHoliday);
//http://localhost:3005/api/holiday/delete/id

module.exports = router;