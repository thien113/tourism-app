import mongoose from "mongoose";
const { Schema } = mongoose;

const attractionSchema = new Schema({
  name: { type: String },
  location: { type: String },
  imageUrl: { type: String },
  mapURL: { type: String },
  description: { type: String },
});

const Attraction =
  mongoose.models.Attraction || mongoose.model("Attraction", attractionSchema);

export default Attraction;
