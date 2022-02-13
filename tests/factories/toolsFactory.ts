import faker from "@faker-js/faker";
import { Tools } from "../../src/models/tools";

export async function createTool() {
  let tags = [];
  for (let i = 0; i <= Math.floor(Math.random() * 5); i++) {
    tags.push(faker.word.adjective());
  }
  const newTool = await Tools.create({
    title: faker.name.title(),
    link: faker.internet.domainName(),
    tags,
    description: faker.lorem.words(),
  });
  return newTool;
}
