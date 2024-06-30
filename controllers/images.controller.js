import Image from "../models/images.model.js"
import cloudindary from "../cloudinary/config.js"
import fs from "fs"

const cloudinary = cloudindary;

export const uploadImages = async (req, res) => {
  const { holidayId } = req.params;
  if (!req.files) {
    return res.status(400).send("No files uploaded.");
  }

  try {
    const uploadPromises = req.files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlink(file.path, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        }
      });
      return {
        url: result.secure_url,
        public_id: result.public_id,
        holidayId,
      };
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
};

export const deleteImage = async (req, res) => {
  const { imageId } = req.params;

  try {
    const image = await Image.findById(imageId);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    await cloudinary.uploader.destroy(image.public_id);

    await Image.findByIdAndDelete(imageId);

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ message: "Error deleting image" });
  }
};

export const getImages = async (req, res) => {
  const { holidayId } = req.params;
  try {
    const images = await Image.find({ holidayId });
    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images.");
  }
};

