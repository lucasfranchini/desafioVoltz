import supertest from "supertest";
import httpStatus from "http-status";

import app, { init } from "../../src/app";
import { clearDatabase, endConnection } from "../utils/database";
import {
  createToolInDatabase,
  createToolObject,
} from "../factories/toolsFactory";

const agent = supertest(app);

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await clearDatabase();
  await endConnection();
});
describe("GET /tools", () => {
  it("should return an array with all the tools", async () => {
    await createToolInDatabase();
    const res = await agent.get("/tools");
    expect(res.body.length).toBeGreaterThan(0);
  });
  it("should return an array containing the tools created", async () => {
    const tool = await createToolInDatabase();
    const res = await agent.get("/tools");
    console.log(tool);
    expect(res.body[0]).toMatchObject(tool);
  });
});

describe("POST /tools", () => {
  it("should return status 201 for valid params", async () => {
    const tool = createToolObject();
    const res = await agent.post("/tools").send(tool);
    expect(res.status).toBe(httpStatus.CREATED);
  });
  it("should return an onbject containing all the tool data for valid params", async () => {
    const tool = createToolObject();
    const res = await agent.post("/tools").send(tool);
    expect(res.body).toMatchObject({ ...tool, id: expect.any(String) });
  });
});
