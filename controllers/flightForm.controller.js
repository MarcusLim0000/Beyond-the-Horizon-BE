import Flight from "../models/flight.model.js";

export async function createFlight(req, res) {
  try {
    const flight = await Flight.create({
      ...req.body,
      createdBy: req.user._id,
    });
    return res.status(200).json(flight);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export async function getFlights(req, res) {
  const { id: holidayId } = req.params;

  if (!holidayId) {
    return res.status(400).json({ error: "Holiday ID is required" });
  }

  try {
    const flights = await Flight.find({ holidayId });
    return res.status(200).json(flights);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export async function updateFlight(req, res) {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!flight) return res.status(404).send("Flight not found");
    return res.status(200).json(flight);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteFlight(req, res) {
  try {
    const { id } = req.params;
    const deletedFlight = await Flight.findByIdAndDelete(id);
    if (!deletedFlight) {
      return res.status(404).json({ error: "Flight not found" });
    }
    return res.json({ message: "Flight deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
