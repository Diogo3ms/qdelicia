const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    user: { 
        type: String, 
        required: true,
        unique: true
        },
    password: {
        type: String, 
        required: true,
        
             },
    })
    module.exports = mongoose.model('utilizadores', commentSchema);