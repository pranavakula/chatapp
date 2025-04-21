import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser";

// Load env variables first
dotenv.config();

// Initialize express app BEFORE using it
const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cookieParser)
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Start server
app.listen(port, () => {
  console.log("Server is running on port: " + port);
  connectDb();
});
