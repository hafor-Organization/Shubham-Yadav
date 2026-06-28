const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Middlewares
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/internships", internshipRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/api/recommendations", recommendationRoutes);

app.use("/api/analytics", analyticsRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "InternAI Backend Running",
  });
});

// Error Handler
app.use(errorHandler);

module.exports = app;
