const Hotel = require('../models/hotel.model')

async function createHotel(req, res) {
    try {
      const hotel = await Hotel.create({
        ...req.body,
        createdBy: req.user._id});
      return res.status(200).json(hotel);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  module.exports = { createHotel };