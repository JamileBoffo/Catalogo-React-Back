import carrinho from '../models/carrinho.js';

export const findAllCarrinhoService = async () => {
  const allCarrinho = await carrinho.find();
  return allCarrinho;
};

export const createManyItensCarrinhoService = async (newCarrinho) => {
  const createdCarrinho = await carrinho.insertMany(newCarrinho);
  return createdCarrinho;
};

export const deleteAllItensCarrinhoService = async () => {
  return await carrinho.deleteMany();
};

