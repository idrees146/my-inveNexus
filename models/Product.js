import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  product: { type: String, required: true },
  price: { type: String, required: true },
  category: {type: String, required:true},
  quantity: {type: String, required:false}

});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
