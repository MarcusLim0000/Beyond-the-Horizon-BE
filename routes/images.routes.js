import { Router } from "express";
import upload from "../multer/multer.mw.js";
import { uploadImages, deleteImage, getImages } from "../controllers/images.controller.js";

const router = Router();

router.post("/:holidayId", upload.array("images", 10), uploadImages);
router.delete("/:imageId", deleteImage);
router.get("/:holidayId", getImages);

export default router;
