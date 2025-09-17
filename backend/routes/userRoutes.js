import express from "express";
import { login ,registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

// http://localhost:8000/api/users/register
userRouter.post("/register", registerUser);
userRouter.post("/auth" , login);



export default userRouter;
