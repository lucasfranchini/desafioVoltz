import IdNotFoundError from "@/errors/idNotFoundError";
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

export async function deleteTool(id: String) {
  const { deletedCount } = await Tools.deleteOne({ _id: id });
  if (deletedCount === 0) {
    throw new IdNotFoundError(id);
  }
}
