import express, { Application, json } from "express";
import mongooseConnection from "./connections/mongoose";
import router from "./routes";
import ErrorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware";
import path from "path";

const app: Application = express();
// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

// Route to serve index.html
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.use(json());
mongooseConnection(app);
app.use("/", router);
app.use(ErrorHandlerMiddleware);
