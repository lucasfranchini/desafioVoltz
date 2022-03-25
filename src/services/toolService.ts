import IdNotFoundError from "@/errors/idNotFoundError";
import fieldType from "@/Interfaces/fieldType";
import { ToolInterface, Tools } from "@/models/tools";

export async function createTool(newTool: ToolInterface) {
  const createdTool = await Tools.create(newTool);
  const retunedTool = createdTool.toJSON();
  return retunedTool;
}

export async function getTools() {
  const tools = await Tools.find();
  return tools;
}

export async function getTool(id: String) {
  const tool = await Tools.findById(id);
  if (!tool) {
    throw new IdNotFoundError(id);
  }
  return tool;
}

export async function deleteTool(id: String) {
  const { deletedCount } = await Tools.deleteOne({ _id: id });
  if (deletedCount === 0) {
    throw new IdNotFoundError(id);
  }
}

export async function searchTools(searchText: string, field: fieldType) {
  let tools: ToolInterface[] = [];
  if (field === "all") {
    tools = await Tools.find({ $text: { $search: searchText } });
  } else if (field === "tags") {
    tools = await Tools.find({ tags: searchText });
  } else {
    tools = await Tools.find({ $where: `this.${field} === '${searchText}'` });
  }
  return tools;
}
