import { Router } from "express";
import userController from "../../controllers/user.controller.js";
import ValidateSchema from "../../utils/ValidateSchema.js";
import { UserValidatorSchema } from "../../validators/user.validator.js";

const userRouter = Router();

userRouter.get("/get", userController.getAllUsers);
userRouter.get("/get/:id", userController.getUserById);
userRouter.post("/get", userController.getUserByEmail);
userRouter.post("/save", [ValidateSchema(UserValidatorSchema)], userController.saveUser);
userRouter.put("/update/:id", userController.updateUser);
userRouter.delete("/delete/:id", userController.deleteUser);

export default userRouter;
