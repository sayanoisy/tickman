import { LOCALHOST_PORT, MONGO_CONNECTION_STRING } from "../config/index";
import { Application, Express } from "express";
import mongoose from "mongoose";

const mongooseConnection = (app: Application) => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => app.listen(LOCALHOST_PORT))
    .then(() =>
      console.log("connected to mongo and listening to port :" + LOCALHOST_PORT)
    )
    .catch((err) => console.log(err));
};

export default mongooseConnection;
