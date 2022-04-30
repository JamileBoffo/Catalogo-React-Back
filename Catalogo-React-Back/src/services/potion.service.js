import potion from '../models/potion.js';


export const findAllPotionsService = async () => {
  const potions = await potion.find();
  return potions;
};

export const findByIdPotionService = async (idParam) => {
  const potionid = await potion.findById(idParam);
  return potionid;
};

export const createPotionService = async (newPotion) => {
  const createdPotion = await potion.create(newPotion);
  return createdPotion;
};

export const updatePotionService = async (id, potionEdited) => {
  const potionUpdate = await potion.findByIdAndUpdate(id, potionEdited);
  return potionUpdate;
};

export const deletePotionService = async (id) => {
  return await potion.findByIdAndDelete(id);
};
