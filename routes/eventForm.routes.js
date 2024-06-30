import { Router } from "express";
import { createEvent, getEvent, deleteEvent, updateEvent } from "../controllers/eventForm.controller.js";

const router = Router();

router.post("/create", createEvent);
router.get("/:id", getEvent);
router.delete("/delete/:id", deleteEvent);
router.put("/update/:id", updateEvent);

export default router;
