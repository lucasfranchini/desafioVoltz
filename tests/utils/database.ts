import "../../src/setup";
import mongoose from "mongoose";
import { Tools } from "../../src/models/tools";

export async function clearDatabase() {
  await Tools.deleteMany();
}

export async function endConnection() {
  await mongoose.disconnect();
}
