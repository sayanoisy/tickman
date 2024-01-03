import express from "express";
import mongooseConnection from "./connections/mongoose";

const app = express();
mongooseConnection(app);
