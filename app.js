const express = require("express");
const dotenv = require('dotenv');
require('dotenv').config({ path: 'config.env' });
const mongoose = require("mongoose")
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const app = express();
require("./db/conn");

// var corsOptions = {
//     origin: "http://localhost:3000"
// };

//Middlewares
// dotenv.config({ path: './config.env' });
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'https://www.example.com/',
        ]
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Image Upload Path
app.use("/uploads", express.static("./uploads"))

//Routes
app.use(userRoute);

//Port
const port = 8000;
app.listen(port, () => {
    console.log(`Server is started on port number ${port} `);

})