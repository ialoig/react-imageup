const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creating Schema
const imageSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        maxlength: 255
    },
    file: {
        Data: Buffer,
        ContentType: String
    }
},
{
    timestamps: true
})

const Images = mongoose.model("Images", imageSchema);
module.exports = Images;