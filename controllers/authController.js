const jwt = require("jsonwebtoken");
const { User } = require("../models/admin");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password, phone, role, status, description } =
      req.body;

    const existUser = await User.findOne({ where: { email } });

    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // --- HASH PASSWORD GENERATE KARVA MATE ---
    const hashedPassword = await bcrypt.hash(password, 10);

    // --- CREATE NEW USER ----
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role: role || 0,
      status: status || 0,
      description: description || null,
    });

    // --- GENERATE JWT TOKEN
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // --- SET THE RESPONSE ---
    res.status(201).json({
      success: true,
      message: "User Register successfully",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        token,
      },
    });
  } catch (error) {
    console.log(`USER REGISTER:- ${error}`);
    res.status(500).json({ message: "SERVER ERROR", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // --- CHECK USER IN DB ---
    const existUser = await User.findOne({ where: { email } });
    if (!existUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // --- CHECK THE PASSWORD PROPER OR NOT ---
    const isPasswordVaild = await bcrypt.compare(password, existUser.password);
    if (!isPasswordVaild) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // --- CHECK USER IS ACTIVE ---
    if (existUser.status !== 1) {
      return res
        .status(403)
        .json({ message: "Account is inactive or blocked password" });
    }

    const token = jwt.sign(
      { id: existUser.id, email: existUser.email, role: existUser.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: existUser.id,
        name: existUser.name,
        email: existUser.email,
        role: existUser.role,
        status: existUser.status,
        token,
      },
    });
  } catch (error) {
    console.log(`LOGIN ERRR: ${error}`);
    res.status(500).json({ message: "Server Error", error: error });
  }
};

module.exports = {
  register,
  login,
};
