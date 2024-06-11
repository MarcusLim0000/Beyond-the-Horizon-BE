const Holiday = require('../models/holiday.model');

async function createHoliday(req, res) {
    try {
      const holiday = await Holiday.create({
        ...req.body,
        createdBy: req.user._id});
      return res.status(200).json(holiday);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async function getHoliday(req, res) {
    try {
      const holiday = await Holiday.find({createdBy: req.user._id});
      return res.status(200).json(holiday);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async function deleteHoliday(req, res) {
    try {
      const { id } = req.params;
    const deletedHoliday = await Holiday.findByIdAndDelete(id);
    if (!deletedHoliday) {
      return res.status(404).json({ error: 'Holiday not found' });
    }
    res.json({ message: 'Holiday deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  module.exports = { createHoliday, getHoliday, deleteHoliday };