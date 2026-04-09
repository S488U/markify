import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "can't be blank"],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
