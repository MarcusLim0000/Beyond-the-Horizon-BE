import { Router } from "express";
import { createHotel, getHotel, deleteHotel, updateHotel } from "../controllers/hotelForm.controller.js";

const router = Router();

router.post("/create", createHotel);
router.get("/:id", getHotel);
router.delete("/delete/:id", deleteHotel);
router.put("/update/:id", updateHotel);

export default router;
