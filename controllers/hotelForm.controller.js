const Hotel = require("../models/hotel.model");

async function createHotel(req, res) {
  try {
    const hotel = await Hotel.create({
      ...req.body,
      createdBy: req.user._id,
    });
    return res.status(200).json(hotel);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function getHotel(req, res) {
  const { id: holidayId } = req.params;

  if (!holidayId) {
    return res.status(400).json({ error: "Holiday ID is required" });
  }

  try {
    const hotels = await Hotel.find({ holidayId });
    return res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { createHotel, getHotel };
