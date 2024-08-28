import httpStatus from 'http-status';
import CatchAsync from '../../utils/CatchAsync';
import { SendResponce } from '../../utils/SendResponce';
import { SlotServices } from './slot.services';

const createSlot = CatchAsync(async (req, res) => {
  const result = await SlotServices.createSlotsIntoDB(req.body);

  SendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slots created successfully',
    data: result,
  });
});

const slotBooking = CatchAsync(async(req, res) => {
  const {id} = req.params;
  const result = await SlotServices.bookedSlot(id);

  SendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slot booked',
    data: result,
  });
})

export const SlotController = {
  createSlot,
  slotBooking
};
