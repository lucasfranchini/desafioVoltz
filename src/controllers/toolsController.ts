import { Request, Response } from "express";
import InvalidDataError from "@/errors/InvalidDataError";
import toolSchema from "@/schemas/toolSchema";
import * as toolService from "@/services/toolService";
import httpStatus from "http-status";
import { isValidObjectId } from "mongoose";
import fieldType from "@/Interfaces/fieldType";

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

export async function getTool(req: Request, res: Response) {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new InvalidDataError("id", [
      " id passed in must be a string of 12 bytes or a string of 24 hex characters",
    ]);
  }
  const tool = await toolService.getTool(id);
  res.send(tool);
}

export async function deleteTool(req: Request, res: Response) {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new InvalidDataError("id", [
      " id passed in must be a string of 12 bytes or a string of 24 hex characters",
    ]);
  }
  await toolService.deleteTool(id);
  res.sendStatus(httpStatus.OK);
}
export async function searchTools(req: Request, res: Response) {
  const { searchText, field }: { searchText: string; field: fieldType } =
    req.body;
  if (typeof searchText !== "string" || typeof field !== "string") {
    throw new InvalidDataError("body", [
      "search text and field must be a string",
    ]);
  }
  const tools = await toolService.searchTools(searchText, field);
  res.send(tools);
}
