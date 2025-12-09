require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Badminton Booking API is running" });
});

// Route imports
const authRoutes = require("./routes/authRoutes");
const courtRoutes = require("./routes/courtRoutes");
const equipmentRoutes = require("./routes/equipmentRoutes");
const coachRoutes = require("./routes/coachRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Route usage
app.use("/auth", authRoutes);
app.use("/courts", courtRoutes);
app.use("/equipment", equipmentRoutes);
app.use("/coaches", coachRoutes);
app.use("/booking", bookingRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
