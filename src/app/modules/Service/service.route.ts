import express from 'express';
import { ServiceController } from './service.controller';

const router = express.Router();

router.post('/create-service', ServiceController.createService)
router.get('/', ServiceController.getAllService)
router.get('/:id', ServiceController.getSingleServiceById)
router.put('/:id', ServiceController.updateService)
router.put('/:id', ServiceController.deleteService)

export const ServicesRouter = router