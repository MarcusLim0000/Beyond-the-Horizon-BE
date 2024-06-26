import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    airport: {
      type: String,
      required: true,
    },
    gate: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    holidayId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Holiday",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model("Flight", flightSchema);

export default Flight;
