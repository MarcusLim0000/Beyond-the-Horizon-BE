const Event = require("../models/event.model");

async function createEvent(req, res) {
  try {
    const event = await Event.create({
      ...req.body,
      createdBy: req.user._id,
    });
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

async function updateEvent(req, res) {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) return res.status(404).send("Event not found");
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

async function deleteEvent(req, res) {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { createEvent, getEvent, updateEvent, deleteEvent };
