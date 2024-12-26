import express from "express";
import { adminLogin } from "../controller/adminController";

const adminRouter = express.Router();
adminRouter.post("/login", adminLogin);
