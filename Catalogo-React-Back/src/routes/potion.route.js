import swaggerUi from 'swagger-ui-express';
import swaggerDocument from  '../../swagger.json'
import { validId, validObjectBody } from '../middlewares/potion.middleware.js';
import { findAllPotionsController, findByIdPotionController, createPotionController, updatePotionController, deletePotionController } from '../controllers/potion.controller.js';
import express from 'express';
export const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

router.get('/all-potions', findAllPotionsController);
router.get('/one-potion/:id', validId, findByIdPotionController);
router.post('/create-potion', validObjectBody, createPotionController);
router.put('/update-potion/:id', validId, validObjectBody, updatePotionController);
router.delete('/delete-potion/:id', validId, deletePotionController);

