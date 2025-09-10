import asyncHandler from "../middlewares/asyncHandler.js";

export const registerUser =asyncHandler(async (req , res) => {

  const {name , username , email , password} = req.body;

  if(!name || !username || !email || !password){
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userExists = await user.findOne({email});

  
   if(userExists){
    res.status(400);
    throw new Error("User already exists , try signing in");
   }

   const user = await User.create({
    name,
    username,
    email,
    password,
   });

     if(user){
  res.status(201).json({
    success: true,
    user: {
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    success: true,
    message: "User registered successfully",
  });
}
else{
  res.status(500);
  throw new Error("failed to create the user , try again");
}


});