const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/database");

const app = express();
app.use(cors());
app.use(express.json());

app.use(require("./config/checkToken"));

app.use("/api/users", require("./routes/user.routes"));

const ensureLoggedIn = require("./config/ensureLoggedIn");
const flightRoutes = require("./routes/flightForm.routes");
const hotelRoutes = require("./routes/hotelForm.routes");
const eventRoutes = require("./routes/eventForm.routes");
const holidayRoutes = require("./routes/holidayForm.routes");
const imageRoutes = require("./routes/images.routes");

app.use("/api/holiday", ensureLoggedIn, holidayRoutes);
app.use("/api/flight", ensureLoggedIn, flightRoutes);
app.use("/api/hotel", ensureLoggedIn, hotelRoutes);
app.use("/api/event", ensureLoggedIn, eventRoutes);
app.use("/api/upload", ensureLoggedIn, imageRoutes);

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`Backend started on port ${PORT}`);
});
