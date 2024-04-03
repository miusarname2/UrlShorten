import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import morgan from "morgan";

// Environment variables
dotenv.config({path:"./"});

//Init server
const main = express();
const port : number | string= process.env.PORT || 3000;

// Adding Middlewares
main.use(express.json());
main.use(morgan("dev"));
// @ts-ignore
main.use(cors({origin:"*"}));


main.listen(port,()=>{
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


