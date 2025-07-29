const express = require("express");
const route = express.Router();
const authController = require("../controllers/authController");

// --- REGISTER ROUTE ---
route.post("/register", authController.register);
// --- LOGIN ROUTE ---
route.post("/login", authController.login);

module.exports = route;
