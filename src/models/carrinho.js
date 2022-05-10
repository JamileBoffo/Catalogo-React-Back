import mongoose from 'mongoose';

const carrinhoSchema = new mongoose.Schema({
  potionId: { type: String, required: true },
  quantidade: { type: Number, required: true }
});

const carrinho = mongoose.model('carrinho', carrinhoSchema);

export default carrinho;
