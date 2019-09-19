const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


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

ProductSchema.plugin(mongoosePaginate);

model('Product', ProductSchema);