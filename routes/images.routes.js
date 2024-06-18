const express = require("express");
const router = express.Router();
const cloudinary = require("../cloudinary/config");
const upload = require("../multer/multer.mw");
const fs = require("fs");
const Image = require("../models/images.model");

router.post(
  "/:holidayId",
  upload.array("images", 10),
  async function (req, res) {
    const { holidayId } = req.params;
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded.",
      });
    }

    try {
      const uploadPromises = req.files.map((file) => {
        return cloudinary.uploader.upload(file.path).then((result) => {
          fs.unlink(file.path, (err) => {
            if (err) {
              console.error("Error deleting file:", err);
            }
          });
          return { url: result.secure_url, holidayId };
        });
      });

      const images = await Promise.all(uploadPromises);
      const savedImages = await Image.insertMany(images);

      res.status(200).json({
        success: true,
        message: "Uploaded!",
        data: savedImages,
      });
    } catch (err) {
      console.error("Error uploading images:", err);
      res.status(500).json({
        success: false,
        message: "Error uploading files.",
      });
    }
  }
);

router.get("/:holidayId", async (req, res) => {
  const { holidayId } = req.params;
  try {
    const images = await Image.find({ holidayId });
    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images.");
  }
});

module.exports = router;
