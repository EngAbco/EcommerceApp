import express from 'express';
import { registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

//http://localhost:8000/api/users/register
userRouter.post("/register" , registerUser);

export default userRouter;