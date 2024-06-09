const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    cost: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
},{
    timestamps: true
})

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;