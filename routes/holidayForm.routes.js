import { Router } from "express";
import { createHoliday, getHoliday, deleteHoliday, updateHoliday } from "../controllers/holidayForm.controller.js";

const router = Router();

router.post("/create", createHoliday);
router.get("/:id", getHoliday);
router.delete("/delete/:id", deleteHoliday);
router.put("/update/:id", updateHoliday);

export default router;
