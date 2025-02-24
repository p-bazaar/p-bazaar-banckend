import Joi from "joi";

export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    product_items: Joi.string(),
    price: Joi.string().allow(''),
    quantity: Joi.string().required(),
    image: Joi.string(),
    favourite: Joi.boolean().default(false),
    location: Joi.string().required(),
    // categoryId: Joi.string(),
    userId: Joi.string()
});