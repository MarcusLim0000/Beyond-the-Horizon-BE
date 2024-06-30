import Holiday from "../models/holiday.model.js";

export async function createHoliday(req, res) {
  try {
    const holiday = await Holiday.create({
      ...req.body,
      createdBy: req.user._id,
    });
    return res.status(200).json(holiday);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export async function getHoliday(req, res) {
  try {
    const holiday = await Holiday.find({ createdBy: req.user._id });
    return res.status(200).json(holiday);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export async function updateHoliday(req, res) {
  try {
    const holiday = await Holiday.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!holiday) return res.status(404).send("Holiday not found");
    res.status(200).json(holiday);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export async function deleteHoliday(req, res) {
  try {
    const { id } = req.params;
    const deletedHoliday = await Holiday.findByIdAndDelete(id);
    if (!deletedHoliday) {
      return res.status(404).json({ error: "Holiday not found" });
    }
    res.json({ message: "Holiday deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
