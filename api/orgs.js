import express from 'express';
import orgController from './controllers/orgController';

const router = express.Router();

router.get('/:org/users', orgController.get);

export default router;
