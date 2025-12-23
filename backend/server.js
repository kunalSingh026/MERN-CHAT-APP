import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors";

// ✅ FIX 1: Uncomment this line so you import 'app' and 'server' from your socket setup
import { app, server } from "./socket/socket.js"; 

dotenv.config();

// ❌ FIX 2: DELETE THIS LINE below. 
// You don't need to create 'app' here because you already imported it on line 11.
// const app = express(); 

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:3000", // Change this if your frontend runs on a different port
    credentials: true, // This allows the browser to send cookies
}));

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

// ✅ This looks correct for Express 5
// Remove the quotes around the route to make it a Regex
app.get(/^(.*)$/, (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// ✅ This will now work because 'server' is imported from line 11
server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});