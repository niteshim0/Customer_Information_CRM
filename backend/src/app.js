import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
  origin:process.env.CORS_ORIGIN,
}))

app.use(express.json({limt:"16kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(cookieParser())

import customerRouter from "./routes/customer.route.js";

app.use("/api/v1/customers",customerRouter);

export {app }