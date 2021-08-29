const mongoose = require("mongoose");

//creating nitin schema and model
const NitinSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    rank:{
        type:String
    },
    available:{
        type: Boolean,
        default: false
    }
})

const Nitin = mongoose.model('nitin',NitinSchema);
module.exports = Nitin;