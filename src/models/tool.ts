import mongoose from "mongoose";

interface ToolInterface {
  title: String;
  link: String;
  description: String;
  tags: String[];
}

const toolSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: String,
  description: { type: String, required: true },
  tags: [{ type: String, index: true }],
});

export const Tools = mongoose.model<ToolInterface>("Tools", toolSchema);
