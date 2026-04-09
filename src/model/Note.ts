import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
