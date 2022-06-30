import Mongoose from "mongoose";
const { Schema } = Mongoose;

const poiSchema = new Schema({
  title: String,
  latitude: String,
  longitude: String,
  city: String,
  country: String,
  description: String,
  category: String,
  img: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Poi = Mongoose.model("Poi", poiSchema);
