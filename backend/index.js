import express from "express";
import { port, mongodb } from "./config.js";
import mongoose from "mongoose";
import productRoute from "./routes/productRoute.js";
import cors from "cors";

const app = express();

//middleware for parsing request.body
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]

}));


app.use("/product", productRoute);



mongoose.connect(mongodb).then(() => {
    console.log("connected to database");
    app.listen(port, () => {
        console.log("server is running");
    });

}).catch((err) => {
    console.log(err);
})
