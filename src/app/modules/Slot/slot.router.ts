import express from 'express';
import { SlotController } from './slot.controller';

const router = express.Router();

router.post('/create-slot', SlotController.createSlot)
router.put('/booking-slot/:id', SlotController.slotBooking)

export const SlotRouter = router;