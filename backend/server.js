import express from "express"; // Import express
import "dotenv/config";        // Import dotenv to manage environment variables
import db from "./config/db.js"; // Import the db connection function
import colors from "colors";    // Import colors for console text styling
import userRouter from "./routes/userRoutes.js"; // Import user routes

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // Middleware to parse JSON request bodies

colors.enable();

db(); // connect to MongoDB

// Routes
app.use("/api/users", userRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("hello from invayl");
});

// Start Server
app.listen(PORT, () => {
  console.log(`server is running successfully on port ${PORT}`.white.bold);
});
