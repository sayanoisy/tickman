import { Router } from "express";
import userRouter from "./api/user";
import eventRouter from "./api/event";
import ticketRouter from "./api/ticket";
import authRouter from "./api/auth";

const router = Router();

router.use("/user", userRouter);
router.use("/event", eventRouter);
router.use("/ticket", ticketRouter);
router.use("/auth", authRouter);

export default router;
