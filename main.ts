import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { link } from "./app/link/aplication/link.routes.js";

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

// Middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? process.env.CORS_ORIGIN || '*' : '*',
  credentials: true
}));

// Health check endpoint
app.get("/", (req: Request, res: Response) => {
  res.json({ 
    message: "URL Shortener API",
    version: "1.0.0",
    status: "Running"
  });
});

// API Routes
app.use('/link', link);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    message: "Route not found", 
    status: 404 
  });
});

// Error Handler
app.use((err: any, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ 
    message: "Internal Server Error", 
    status: 500 
  });
});

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on port ${port}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
