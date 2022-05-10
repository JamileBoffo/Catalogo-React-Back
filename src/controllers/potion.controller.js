import mongoose from 'mongoose';
import { findAllPotionsService, findByIdPotionService, createPotionService, updatePotionService, deletePotionService  } from '../services/potion.service.js';

export const findAllPotionsController = async (req, res) => {
  const potions =  await findAllPotionsService();

  if(potions.lenght == 0){
    return res.status(400).send({ message: 'Não existem poções cadastradas' })
  }

  res.send(potions);
};

export const findByIdPotionController = async (req, res) => {
  const idParam = req.params.id;

  const chosenPotion = await findByIdPotionService(idParam);

  if(!chosenPotion) {
    return req.status(400).send({message: 'Poção não encontrada' });
  }
  res.send(chosenPotion);
};

export const createPotionController = async (req, res) => {
  const potion = req.body;

  const newPotion = await createPotionService(potion);
  res.status(201).send(newPotion);
};

export const updatePotionController = async (req, res) => {
  const idParam = req.params.id;
  const potionEdit = req.body;

  const updatedPotion= await updatePotionService(idParam, potionEdit)
  res.send(updatedPotion);
};

export const deletePotionController = async (req, res) => {
  const idParam = req.params.id;

  await deletePotionService(idParam);
  res.send({ message: 'Poção deletada com sucesso!' });
};


