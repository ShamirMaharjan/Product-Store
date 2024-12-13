import express from "express";
import { Product } from "../models/productModel.js";
const router = express.Router();


//create prodcut
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);

    } catch (error) {
        console.log(error);
    }
})

//read one product by id
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);

    } catch (error) {
        console.log(error);
    }
})

//update product by id
router.put("/:id", async (req, res) => {
    const { title, description, price, image } = req.body;
    try {
        if (!mangoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid Product id"
            })
        }
        if (!title || !description || !price || !image) {
            return res.status(400).json({
                message: "All fields are required"
            })

        }

        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if (!product) {
            res.status(404).send("Product not found");
        }
        return res.status(200).json(product);


    } catch (error) {
        console.log(error);

    }
})

//delete product by id
router.delete("/:id", async (req, res) => {
    if (!mangoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            message: "Invalid Product id"
        })
    }
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).send("Product not found");
        }
        return res.status(200).json(product);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);

    }

})
export default router;