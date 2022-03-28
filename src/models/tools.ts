import mongoose from "mongoose";

export interface ToolInterface {
  title: String;
  link: String;
  description: String;
  tags: String[];
}

const toolSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    link: String,
    description: { type: String, required: true },
    tags: [{ type: String, index: true }],
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (doc: any, ret: any, options: any) => {
        delete ret._id;
      },
    },
  }
);
toolSchema.index({ title: "text", tags: "text" });
export const Tools = mongoose.model<ToolInterface>("Tools", toolSchema);
