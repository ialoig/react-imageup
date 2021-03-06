const mongoose = require("mongoose");
const express = require('express');
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const imagesRouter = require('./routes/api/image');

require('dotenv').config();

//setting middleware
app.use(cors());
app.use(express.json()); //a middleware that extract req.body
app.use(fileupload()); //a middleware that extract req.files

//port connection
const port = process.env.PORT || 5000;

//enable cross-origin-site-request
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*"
    });
    next();
})

//using bodyparser to encode body from request
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

//Database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
        console.log("Connected to MongoDb")
    })
    .catch( (err) => {
        console.log("Error connecting to MondoDb: " +err)
    });
const db = mongoose.connection;
db.once('open', () => {
    console.log("MongoDB database connection established successfully");    
});


//API endpoint
app.use('/api/image', imagesRouter); 

app.listen(port, () => {
    console.log("Server is running on port: ", port);
});