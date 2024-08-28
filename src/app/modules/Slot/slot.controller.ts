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

export const SlotController = {
  createSlot,
};
