import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_clNAME}`
    );
    console.log(
      `\n MongoDB Connected! DB HOST: ${connectionInstance.connection.host}` //deployement, production etc all have different hosts, so to know to which host we're connecting to, this connection instance's further methods are useful.
    );
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
