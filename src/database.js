import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(
    "mongodb+srv://adxell:7oQTjcYECemnPh5c@cluster0.3ygul.mongodb.net/proyect?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((response) => console.log("Db is coonneted"))
  .catch((err) => console.log(err));
