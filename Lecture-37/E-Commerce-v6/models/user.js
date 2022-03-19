const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    // username,hash and salt will be added by  passport local mongoose
    cart: [
        {   
            _id:{id:false},
            item:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Product'
            },
            qty: {
                type: Number,
                default:1
            }  
        }
    ],
    wishList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]

});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);