const mongoose = require("mongoose");
//const User = require('./user.models')

const holidaySchema = mongoose.Schema({

    location: {

    },
    flight: {

    },
    hotel: {

    },
    event: {

    }

},

{timestamps:true}

);

const Holiday = mongoose.model("Holiday", holidaySchema);

module.exports = Holiday;