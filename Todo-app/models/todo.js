const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema ({
     title: {
        type: String,
        required: true
     },
     completed: {
        type: Boolean,
     }
})

module.exports= mongoose.model("Todo", todoSchema);