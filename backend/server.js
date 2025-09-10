import express from 'express'; // Import express
import "dotenv/config";        // Import dotenv to manage environment variables
import db from './config/db.js'; // Import the db connection function
import colors from 'colors';    // Import colors for console text styling
import userRouter from './routes/userRoutes.js'; // Import user routes


const app = express();
const PORT = process.env.PORT ;

colors.enable();

db(); // connect to MongoDB

app.use("/api/users", userRouter); // Use the user routes


app.get('/', (req, res) => {
  res.send("hello from invayl");
});

app.listen(PORT, () => {
  console.log(`server is running successfully on port ${PORT}`.white.bold);
});
