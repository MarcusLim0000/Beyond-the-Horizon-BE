const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rooms: {
      type: Number,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkInTime: {
      type: String,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    checkOutTime: {
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

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
