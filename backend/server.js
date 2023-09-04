const path = require("path");
const express = require("express");
const app = express();
const color = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3020;
const { errorHandler } = require("./middleware/errorMiddleware");
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

// DB CONNECTION
const connectDB = require("./config/db");
connectDB();

// MIDDLE WARE
app.use(express.json()); // For req.body
app.use(express.urlencoded({ extended: false })); // For req.params
app.use(errorHandler); //to make override default errorhandler

// ROUTES
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);


// Serve frontend Start *****
// After finish all coding , go to frontend folder & > npm run build
// Then, you can run front-end in the server url
if (process.env.NODE_ENV === "production") {
  // Set react frontend static folder
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Send all route to front-end index.html file except above API routes
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
    app.get('/', (req, res) => {
      res.send("Please set to production")
    });
}
// Serve frontend End *****


// LISTEN SERVER
app.listen(PORT, () => {
  console.log(`Server startd on port ${PORT}`);
});
