import {findAllCarrinhoService, createManyItensCarrinhoService,deleteAllItensCarrinhoService} from '../services/carrinho.service.js';

export const findAllCarrinhoController = async (req, res) => {
  const allCarrinho = await findAllCarrinhoService();
  if (!allCarrinho) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho!' });
  }
  res.send(allCarrinho);
};

export const createManyItensCarrinhoController = async (req, res) => {
  const carrinho = req.body;
  const newCarrinho = await createManyItensCarrinhoService(
    carrinho
  );
  res.status(201).send(newCarrinho);
};

export const deleteAllItensCarrinhoController = async (req, res) => {
  await deleteAllItensCarrinhoService();
  res.send({ message: 'Carrinho finalizado com sucesso!' });
};


