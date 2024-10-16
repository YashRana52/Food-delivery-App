import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js"; // Ensure this file exists and is configured properly
import cartRouter from "./routes/CartRoutes.js";
import foodRouter from "./routes/FoodRoutes.js"; // Ensure correct filename casing
import orderRouter from "./routes/OrderRoute.js";
import userRouter from "./routes/UserRoutes.js";

// App configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter); 
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("My name is Yash Rana");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
