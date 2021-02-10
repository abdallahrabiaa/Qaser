const { model } = require('mongoose');
const mongoose= require('mongoose');
const shortId = require('shortid');
const shortUrlSchema= new mongoose.Schema({
    fullUrl:{
        type:String,
        required:true,
        match: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        
    },
    shortUrl:{
        type:String,
        required:true,
        default:shortId.generate
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    }
},{timestamps:true})

const urlModel= mongoose.model('shortUrl',shortUrlSchema);
module.exports=urlModel;