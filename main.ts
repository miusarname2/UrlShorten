import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import { link } from "./app/link/aplication/link.routes.js";

dotenv.config();

const app: Express = express();
const port: string | number=  process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use('/link',link);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});