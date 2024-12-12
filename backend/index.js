import express from "express";
import { port, mongodb } from "./config.js";
import mongoose from "mongoose";
import productRoute from "./routes/productRoute.js";


const app = express();

//middleware for parsing request.body
app.use(express.json());

app.use("/product", productRoute);



mongoose.connect(mongodb).then(() => {
    console.log("connected to database");
    app.listen(port, () => {
        console.log("server is running");
    });

}).catch((err) => {
    console.log(err);
})
