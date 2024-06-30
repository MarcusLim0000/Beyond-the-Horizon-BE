import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/database.js";
import checkToken from "./config/checkToken.js";
import ensureLoggedIn from "./config/ensureLoggedIn.js";
import userRoutes from "./routes/user.routes.js";
import flightRoutes from "./routes/flightForm.routes.js";
import hotelRoutes from "./routes/hotelForm.routes.js";
import eventRoutes from "./routes/eventForm.routes.js";
import holidayRoutes from "./routes/holidayForm.routes.js";
import imageRoutes from "./routes/images.routes.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "https://beyond-the-horizon-fe.vercel.app/",
}));

app.use(express.json());

app.use(checkToken);

app.use("/api/users", userRoutes);

app.use("/api/holiday", ensureLoggedIn, holidayRoutes);
app.use("/api/flight", ensureLoggedIn, flightRoutes);
app.use("/api/hotel", ensureLoggedIn, hotelRoutes);
app.use("/api/event", ensureLoggedIn, eventRoutes);
app.use("/api/upload", ensureLoggedIn, imageRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend started on port ${PORT}`);
});