import express from "express";
import port from "./config.js";

const app = express();

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port);