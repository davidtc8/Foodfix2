import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";

//routes files imports
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";


const app = express();
dotenv.config()
app.use(cors());

//Base route to get acces to all post routes.
app.use("/posts", postRoutes); //Test with:
app.use('/user', userRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


//CONNECTO TO MONGO DB ATLAS
const CONNECTION_URL =
  "mongodb+srv://test:test123@cluster0.2fscpix.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3002; //should be 5000

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

//no warnings in the console
// mongoose.set('useFindAndModify', false);
