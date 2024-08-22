const mongoose = require('mongoose')

//mongoose schema
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
        
    },

    password: {
        type: String,
        require: true,
        
    },

    createdOn: {
        type: Date,
        default: new Date()
    }

})


module.exports = mongoose.model('user', userSchema)