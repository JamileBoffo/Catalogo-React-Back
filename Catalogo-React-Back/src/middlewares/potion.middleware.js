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

  if (!potion || !potion.titulo || !potion.sinopse || !potion.img || !potion.ano) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova poção ao catálogo!',
    });
  }
  next();
};

