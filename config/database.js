import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUri = process.env.DATABASE_URL;

if (!dbUri) {
  throw new Error("DATABASE_URL environment variable is not defined.");
}

mongoose.connect(dbUri);

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on("error", (err) => {
  console.error(`Database connection error: ${err}`);
});
