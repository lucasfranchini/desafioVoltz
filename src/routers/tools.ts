import { Router } from "express";
import * as toolsController from "@/controllers/toolsController";

const router = Router();

router.post("/", toolsController.createTool);
router.get("/", toolsController.getTools);
router.delete("/:id", toolsController.deleteTool);
router.get("/:id", toolsController.getTool);

export default router;
