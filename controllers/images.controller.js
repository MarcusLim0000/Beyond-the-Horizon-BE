const Image = require("../models/Images.model");

const uploadImages = async (req, res) => {
  const { holidayId } = req.params;
  if (!req.files) {
    return res.status(400).send("No files uploaded.");
  }

  try {
    const images = req.files.map((file) => ({
      url: `/uploads/${file.filename}`,
      holidayId,
    }));

    const savedImages = await Image.insertMany(images);
    res.status(200).json(savedImages);
  } catch (error) {
    res.status(500).send("Error uploading images.");
  }
};

const getImages = async (req, res) => {
  const { holidayId } = req.params;
  try {
    const images = await Image.find({ holidayId });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).send("Error fetching images.");
  }
};

module.exports = { uploadImages, getImages };
