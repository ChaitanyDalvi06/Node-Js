import mongoose from "mongoose";

const planetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    has_ring: {
      type: Boolean,
      required: true,
    },
    temperature_range: {
      type: String,
      required: true,
    },
    bigger_than_earth: {
      type: Boolean,
      required: true,
    }
  },
  { timestamps: true }
);

const planetModel = mongoose.model("planets",planetSchema)

export default planetModel