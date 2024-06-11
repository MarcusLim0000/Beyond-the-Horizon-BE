const Flight = require('../models/flight.model')

async function createFlight(req, res) {
    try {
      const flight = await Flight.create({
        ...req.body,
        createdBy: req.user._id});
      return res.status(200).json(flight);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async function getFlights(req, res) {
    try {
      const flights = await Flight.find({createdBy: req.user._id});
      return res.status(200).json(flights);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async function deleteListing(req, res) {
    try {
      const { id } = req.params;
    const deletedListing = await Flight.findByIdAndDelete(id);
    if (!deletedListing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.json({ message: 'Listing deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  module.exports = { createFlight, getFlights, deleteListing };
