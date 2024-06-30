import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    url: { type: String, required: true },
    holidayId: { type: Schema.Types.ObjectId, ref: "Holiday", required: true },
    public_id: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Image", imageSchema);
