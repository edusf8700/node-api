const {Schema, model} = require('mongoose');


const ProductSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

model('Product', ProductSchema);