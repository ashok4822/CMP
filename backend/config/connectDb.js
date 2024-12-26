import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://arunnkpannalmadom:arunnkpannalmadom@cluster0.yjzer2b.mongodb.net/cmp"
    )
    .then(() => console.log("DB Connected"));
};

// mongosh "mongodb+srv://cluster0.yjzer2b.mongodb.net/" --apiVersion 1 --username arunnkpannalmadom
