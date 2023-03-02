import mongoose from "mongoose";
const { Schema } = mongoose;

const attractionSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String },
  mapURL: { type: String },
  descriptions: { type: String },
});

const Attraction =
  mongoose.models.Attraction || mongoose.model("Attraction", attractionSchema);

export default Attraction;
