import Mongoose from "mongoose";
const { Schema } = Mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  accountType: String,
  timeCreated: String,
  dateCreated: String,
  poiCount: Number,
  isAdmin: Boolean,
});

export const User = Mongoose.model("User", userSchema);
