import express from 'express';
import { SlotController } from './slot.controller';

const router = express.Router();

router.post('/create-slot', SlotController.createSlot)

export const SlotRouter = router;