const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    Nome_do_prato: { 
        type: String, 
        required: true
        },
    Cod: {
    type: Number, 
    required: true,
    unique: true
         },
    catprato: { 
        type: String, 
        required: true
        },
    tipo: { 
    type: String, 
    required: true
    }
    }, {
    timestamps: true
    })
    module.exports = mongoose.model('qdelicia', commentSchema);
    