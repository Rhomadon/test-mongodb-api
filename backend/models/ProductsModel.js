import mongoose from "mongoose"

const Product = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

export default mongoose.model('Products', Product)