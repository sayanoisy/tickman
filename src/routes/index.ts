import { Router } from "express";
import userRouter from "./api/user";
import eventRouter from "./api/event";
import ticketRouter from "./api/ticket";

const router = Router();

router.use("/user", userRouter);
router.use("/event", eventRouter);
router.use("/ticket", ticketRouter);

export default router;
