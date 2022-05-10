import mongoose from 'mongoose';

const potionSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  img: { type: String, required: true },
  valor: { type: Number, required: true },
});

export const potion = mongoose.model('potions', potionSchema);

