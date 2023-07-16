import express, { Request, Response } from "express";
import userRouter from "../routes/users";
import journalRouter from "../routes/journals";
import pool from "../database/database";
import cors from "cors";

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
pool
  .connect()
  .then(() => {
    console.log("connected to postgres");
  })
  .catch((error) => {
    console.log("error connecting to postgres", error.message);
  });

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Home");
});

app.use("/awesome/applicant", userRouter);
app.use("/api/journal", journalRouter);

export default app;
