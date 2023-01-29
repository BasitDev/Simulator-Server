const mongoose = require('mongoose');

//User Schema
const userSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true,
        unique: true
    },
    vendorDescription: {
        type: String,
        required: true,
    },
    vendorPoints: {
        type: Number,
        // required: true
    }
    // email: {
    //     type: String,
    //     required: true,
    //     // unique: true
    // },
    // country: {
    //     type: String,
    //     required: true
    // },
    // description: {
    //     type: String,
    //     required: true
    // }
});

//User Model
const users = new mongoose.model('users', userSchema);


module.exports = users;