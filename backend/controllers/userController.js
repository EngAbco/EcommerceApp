import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utilis/generateToken.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ Find user only by email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found, please register",
    });
  }

  // 2️⃣ Compare password with bcrypt (using matchPassword method in your model)
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(res, user._id); // <-- generate token and set cookie
    res.json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: token, // <-- return token in response body as well (optional)
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});









// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public

export const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists, try signing in");
  }

  const user = await User.create({
    name,
    username,
    email,
    password, // ⚠️ plain text for now (will improve later)
  });

  if (user) {
    res.status(201).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      message: "User registered successfully",
    });
  } else {
    res.status(500);
    throw new Error("Failed to create the user, try again");
  }
});
