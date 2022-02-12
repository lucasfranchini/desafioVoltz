import { Router } from "express";
import * as toolsController from "@/controllers/toolsController";

const router = Router();

router.post("/", toolsController.createTool);

export default router;
