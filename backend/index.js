import express from "express";
import { port, mongodb } from "./config.js";
import mongoose from "mongoose";
import { Product } from "./models/productModel.js";


const app = express();
app.use(express.json());


//create prodcut
app.post("/product", async (req, res) => {
    const { title, description, price, image } = req.body;
    try {
        if (!title || !description || !price || !image) {
            return res.status(400).json({
                message: "All fields are required"
            })

        }
        const newproduct = {
            title,
            description,
            price,
            image
        }
        const product = await Product.create(newproduct);
        return res.status(201).json(product);

    } catch (error) {
        console.log(error);

    }

})

//get all products
app.get("/product", async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);

    } catch (error) {
        console.log(error);
    }
})

app.get("/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);

    } catch (error) {
        console.log(error);
    }
})

mongoose.connect(mongodb).then(() => {
    console.log("connected to database");
    app.listen(port, () => {
        console.log("server is running");
    });

}).catch((err) => {
    console.log(err);
})
