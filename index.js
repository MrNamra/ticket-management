require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models/admin");
const authRoute = require("./routes/authRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// --- APPLY MIDDLEWARE ---
app.use(express.json());

// --- SET ROUTE ---
app.use("/v1/api/auth", authRoute);

// --- TEST DB CONNECTION ---
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");

    return sequelize.sync({ alter: true });
  })
  .then(() => {
    app.listen(PORT, () => console.log("Server is running on PORT: ", PORT));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// app.listen(PORT, () => console.log("Server is running on PORT: ", PORT));
