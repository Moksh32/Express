require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectdb = require("./db/connect")
app.use(express.json())
app.use(require("./routes/auth"))
const cookieParser = require('cookie-parser');
app.use(cookieParser());


mongoose.set('strictQuery', true);
const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await connectdb(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()