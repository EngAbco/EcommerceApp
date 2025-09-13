import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";

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
