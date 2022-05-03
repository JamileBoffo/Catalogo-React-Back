import swaggerUi from 'swagger-ui-express';
import swaggerDocument from  '../../swagger.json'
import { validId, validObjectBody } from '../middlewares/potion.middleware.js';
import { findAllPotionsController } from '../controllers/potion.controller.js';
import express from 'express';
export const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

router.get('/all-potions', findAllPotionsController);
/*router.get('/one-potion/:id', validId, controllerPotions.findByIdPotionController);
router.post('/create-potion', validObjectBody, controllerPotions.createPotionController);
router.put('/update-potion/:id', validId, validObjectBody, controllerPotions.updatePotionController);
router.delete('/delete-potion/:id', validId, controllerPotions.deletePotionController);*/

