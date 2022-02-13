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

  it("should return status 422 for invalid params", async () => {
    const tool = createToolObject();
    tool.link = "invalid";
    const res = await agent.post("/tools").send(tool);
    expect(res.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
  });
});

describe("DELETE /tools/:id", () => {
  it("should return status 200 for valid id", async () => {
    const tool = await createToolInDatabase();
    const res = await agent.delete(`/tools/${tool.id}`);
    expect(res.status).toBe(httpStatus.OK);
  });

  it("should return status 422 for invalid params", async () => {
    const res = await agent.delete("/tools/invalid");
    expect(res.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
  });
  it("should return status 404 for not registered id", async () => {
    const res = await agent.delete("/tools/6208405cc5ed489059e28f91");
    expect(res.status).toBe(httpStatus.NOT_FOUND);
  });
});
