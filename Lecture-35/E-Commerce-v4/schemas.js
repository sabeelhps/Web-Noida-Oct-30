const Joi = require('joi');


module.exports.productSchema = Joi.object({
    name: Joi.string().min(3).trim().required(),
    price: Joi.number().min(0).required(),
    desc: Joi.string().required(),
    img: Joi.string().required()
});


module.exports.reviewSchema = Joi.object({
    rating: Joi.number().min(0).max(5).required(),
    comment: Joi.string().trim().required()
})