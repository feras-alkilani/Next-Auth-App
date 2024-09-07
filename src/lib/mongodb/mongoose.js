import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-auth-app",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    initialized = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};
