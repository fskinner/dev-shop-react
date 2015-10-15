import express from 'express';
import cartController from './controllers/cartController';

const router = express.Router();

router.get('/', cartController.get);
router.post('/', cartController.post);
router.delete('/:id', cartController.delete);
router.delete('/', cartController.wipe);

export default router;
