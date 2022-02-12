import { Router } from "express";
import toolsRouter from "@/routers/tools";

const router = Router();

router.use("/tools", toolsRouter);

export default router;
