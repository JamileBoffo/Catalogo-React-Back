import swaggerUi from 'swagger-ui-express';
import swaggerDocument from  '../../swagger.json'
import express from 'express';

import { validId, validObjectBody, validObjectBodyCarrinho } from '../middlewares/potion.middleware.js';

import { findAllPotionsController, findByIdPotionController, createPotionController, updatePotionController, deletePotionController } from '../controllers/potion.controller.js';

import { findAllCarrinhoController, createManyItensCarrinhoController, deleteAllItensCarrinhoController } from '../controllers/carrinho.controller.js'


export const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

router.get('/all-potions', findAllPotionsController);
router.get('/one-potion/:id', validId, findByIdPotionController);
router.post('/create-potion', validObjectBody, createPotionController);
router.put('/update-potion/:id', validId, validObjectBody, updatePotionController);
router.delete('/delete-potion/:id', validId, deletePotionController);

router.get('/all-carrinho', findAllCarrinhoController);
router.post('/create-carrinho', validObjectBodyCarrinho, createManyItensCarrinhoController);
router.delete('/finish-carrinho', deleteAllItensCarrinhoController);
