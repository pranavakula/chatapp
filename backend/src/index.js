import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Load env variables
dotenv.config();

// Initialize express app
const app = express();
const port = process.env.PORT;

// ✅ Use Middlewares (Order matters)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// ✅ Use Routes (after middlewares)
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Start server
app.listen(port, () => {
  console.log("Server is running on port: " + port);
  connectDb();
});
