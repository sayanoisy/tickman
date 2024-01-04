import { Router } from "express";
import userRouter from "./api/user";
import eventRouter from "./api/event";

const router = Router();

router.use("/user", userRouter);
router.use("/event", eventRouter);

export default router;
