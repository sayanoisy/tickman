import express, { Application, json } from "express";
import mongooseConnection from "./connections/mongoose";
import router from "./routes";
import ErrorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware";

const app: Application = express();
app.use(json());
mongooseConnection(app);
app.use("/", router);
app.use(ErrorHandlerMiddleware);
