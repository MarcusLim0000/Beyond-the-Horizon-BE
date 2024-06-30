import Hotel from "../models/hotel.model.js";

export async function createHotel(req, res) {
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

export async function getHotel(req, res) {
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

export async function updateHotel(req, res) {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hotel) return res.status(404).send("Hotel not found");
    res.status(200).json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export async function deleteHotel(req, res) {
  try {
    const { id } = req.params;
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    if (!deletedHotel) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.json({ message: "Hotel deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
