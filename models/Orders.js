import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({

    product: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: String, required: true },

});

export default mongoose.models.Orders || mongoose.model('Orders', OrderSchema)