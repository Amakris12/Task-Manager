const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provide your name"],
        trim:true,
        maxlength:[20,'Name cannont reach this limit']     
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Task',TaskSchema)

/*
    const TaskSchema = new mongoose.Schema({
    name:{
        type:string,
        required:[true,"must provide your name"]
        trim:true,
        maxlength:[20,'Name cannont reach this limit']     
    },
    completed{
        type:Boolean,
        default:false,
    }
})
*/
