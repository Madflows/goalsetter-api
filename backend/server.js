const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors")
const connectDB = require("./config/db")

const port = process.env.PORT;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB()

const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes")

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes)

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
