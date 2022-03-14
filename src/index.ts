import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

dotenv.config();

const app = express();

// middlware phan trung gian kiem tra
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // client gui du lieu den sv. se co nhieu kieu du lieu thi json dung nhieu nhat.
app.use(express.urlencoded());

//database

const URI = process.env.MONGODB_URL;

mongoose.connect(
    URI,
    {
        autoIndex: false,
    },
    (err) => {
        if (err) throw err;
        console.log("mongodb connection.");
    }
);

// routes
app.use("/api", routes);

//start
const port = process.env.POST || 5000; // deploy len heroku se co port rieng

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});
