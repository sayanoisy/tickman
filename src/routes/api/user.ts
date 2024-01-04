import { Router } from "express";
import userController from "../../controllers/user.controller.js";
import validateUser from "../../utils/ValidateSchema.js";

const userRouter = Router();

userRouter.get("/get", userController.getAllUsers);
userRouter.get("/get/:id", userController.getUserById);
userRouter.post("/get", userController.getUserByEmail);
userRouter.post("/save", [validateUser], userController.saveUser);
userRouter.put("/update/:id", userController.updateUser);
userRouter.delete("/delete/:id", userController.deleteUser);

export default userRouter;
