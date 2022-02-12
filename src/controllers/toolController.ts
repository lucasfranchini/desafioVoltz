import InvalidDataError from "@/errors/InvalidDataError";
import toolSchema from "@/schemas/toolSchema";
import { Request, Response } from "express";

export async function createTool(req: Request, res: Response) {
  const validation = toolSchema.validate(req.body);
  if (!!validation.error) {
    throw new InvalidDataError(
      "body",
      validation.error.details.map((error) => error.message)
    );
  }
}
