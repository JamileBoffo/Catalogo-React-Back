import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  next();
};

export const validObjectBody = (req, res, next) => {
  const potion = req.body;

  if (
    !potion ||
    !potion.nome ||
    !potion.descricao ||
    !potion.img ||
    !potion.valor
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova poção ao catálogo!',
    });
  }
  next();
};

export const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.body;

  carrinho
    .forEach((item) => {
      if (!item || !item.potionId || !item.quantidade) {
        return res
          .status(400)
          .send({ message: 'Envie todos os campos das poções!' });
      }
    })
  next();
};
