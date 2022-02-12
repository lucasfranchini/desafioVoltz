import { ToolInterface, Tools } from "@/models/tools";

export async function createTool(newTool: ToolInterface) {
  const createdTool = await Tools.create(newTool);
  const retunedTool = createdTool.toObject({ versionKey: false });
  return retunedTool;
}
