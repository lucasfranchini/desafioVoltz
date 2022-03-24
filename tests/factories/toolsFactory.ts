import faker from "@faker-js/faker";
import { Tools, ToolInterface } from "../../src/models/tools";

export async function createToolInDatabase() {
  const toolObject = createToolObject();
  const newTool = await Tools.create(toolObject);
  return newTool.toJSON();
}

export function createToolObject(): ToolInterface {
  let tags = [];
  for (let i = 0; i <= Math.floor(Math.random() * 5); i++) {
    tags.push(faker.word.adjective());
  }
  const newTool = {
    title: faker.name.title(),
    link: faker.internet.url(),
    tags,
    description: faker.lorem.words(),
  };
  return newTool;
}
