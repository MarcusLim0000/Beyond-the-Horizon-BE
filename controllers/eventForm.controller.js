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

  module.exports = { createEvent };