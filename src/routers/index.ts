import { Router } from "express";
import toolsRouter from "@/routers/tools";

const router = Router();

router.use("/tools", toolsRouter);
router.get("/", (req, res) => {
  res.send({ name: "tool" });
});

export default router;
