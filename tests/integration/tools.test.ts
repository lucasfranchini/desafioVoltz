import supertest from "supertest";
import httpStatus from "http-status";

import app, { init } from "../../src/app";
import { clearDatabase, endConnection } from "../utils/database";

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
  it("should return an array with all the tools", async () => {});
});
