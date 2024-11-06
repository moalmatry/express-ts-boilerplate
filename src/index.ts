import express, { NextFunction, Request, Response } from "express";
import userRouter from "./routes/users";

const app = express();

app.use("/api/users", userRouter);

const PORT = 3000;

app.get(
  "/api/users",
  (request: Request, response: Response, next: NextFunction) => {}
);

app.listen(PORT, () => {
  console.log("Running on port: ", PORT);
});
