import { Request, Response } from "express";
import InvalidDataError from "@/errors/InvalidDataError";
import toolSchema from "@/schemas/toolSchema";
import * as toolService from "@/services/toolService";
import httpStatus from "http-status";
import idSchema from "@/schemas/idSchema";

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
  res.status(httpStatus.CREATED).send(createdTool);
}

export async function getTools(req: Request, res: Response) {
  const tools = await toolService.getTools();
  res.send(tools);
}

export async function deleteTool(req: Request, res: Response) {
  const { id } = req.params;
  const validation = idSchema.validate(id);
  if (!!validation.error) {
    throw new InvalidDataError(
      "id",
      validation.error.details.map((error) => error.message)
    );
  }
  await toolService.deleteTool(id);
  res.sendStatus(httpStatus.OK);
}
