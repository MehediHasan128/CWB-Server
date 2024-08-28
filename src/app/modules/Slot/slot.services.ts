import { Services } from '../Service/service.model';
import { TSlot } from './slot.interface';
import { Slots } from './slot.model';

const createSlotsIntoDB = async (payload: TSlot) => {
  const { serviceId, date, startTime, endTime } = payload;

  const service = await Services.findById(serviceId);
  const existSlot = await Slots.findOne({ serviceId, date });
  if (!existSlot) {
    const slots: TSlot[] = [];

    const timeStart = parseInt(startTime.split(':')[0], 10);
    const lastTime = parseInt(endTime.split(':')[0], 10);

    for (let i = timeStart; i < lastTime; i++) {
      const slotStartTime = `${i.toString().padStart(2, '0')}:00`;
      const slotEndTime = `${(i + 1).toString().padStart(2, '0')}:00`;

      const newSlot = new Slots({
        serviceId,
        date,
        startTime: slotStartTime,
        endTime: slotEndTime,
      });

      const savedSlot = await newSlot.save();
      slots.push(savedSlot);
    }

    return slots;
  } else {
    console.log('slot exist');
  }
};

export const SlotServices = {
  createSlotsIntoDB,
};
