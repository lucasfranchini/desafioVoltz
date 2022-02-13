import { ToolInterface, Tools } from "@/models/tools";

export async function createTool(newTool: ToolInterface) {
  const createdTool = await Tools.create(newTool);
  const retunedTool = createdTool.toObject({ versionKey: false });
  return retunedTool;
}

export async function getTools() {
  const tools = await Tools.find().select("-__v");
  return tools;
}
