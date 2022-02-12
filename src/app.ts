import "@/setup";
import express from "express";
import "express-async-errors";
import cors from "cors";
import mongoose from "mongoose";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware";

const app = express();
app.use(cors());
app.use(express.json());

app.use(errorHandlingMiddleware);

export async function init() {
  await mongoose.connect(process.env.DATABASE_URL, {
    authSource: "admin",
  });
}

export default app;
