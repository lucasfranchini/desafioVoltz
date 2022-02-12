import { Request, Response } from "express";
import InvalidDataError from "@/errors/InvalidDataError";
import toolSchema from "@/schemas/toolSchema";
import * as toolService from "@/services/toolService";

export async function createTool(req: Request, res: Response) {
  const newTool = req.body;
  const validation = toolSchema.validate(newTool);
  if (!!validation.error) {
    throw new InvalidDataError(
      "body",
      validation.error.details.map((error) => error.message)
    );
  }
  const createdTool = await toolService.createTool(newTool);
  res.status(201).send(createdTool);
}

export async function getTools(req: Request, res: Response) {}
