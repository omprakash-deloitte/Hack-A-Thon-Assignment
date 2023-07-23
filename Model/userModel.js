import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  userId: String,
});
const User = mongoose.model("User", userSchema);

export default User;
