const Event = require('../models/event.model')

async function createEvent(req, res) {
    try {
      const event = await Event.create({
        ...req.body,
        createdBy: req.user._id});
      return res.status(200).json(event);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async function getEvent(req, res) {
    const { id: holidayId } = req.params;
  
    if (!holidayId) {
      return res.status(400).json({ error: "Holiday ID is required" });
    }
  
    try {
      const events = await Event.find({ holidayId });
      return res.status(200).json(events);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  module.exports = { createEvent, getEvent };