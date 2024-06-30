import { Router } from "express";
import { createFlight, getFlights, deleteFlight, updateFlight } from "../controllers/flightForm.controller.js";

const router = Router();

router.post("/create", createFlight);
router.get("/:id", getFlights);
router.delete("/delete/:id", deleteFlight);
router.put("/update/:id", updateFlight);

export default router;
