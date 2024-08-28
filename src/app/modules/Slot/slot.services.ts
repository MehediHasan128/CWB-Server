import { Services } from '../Service/service.model';
import { TSlot } from './slot.interface';
import { Slots } from './slot.model';

const createSlotsIntoDB = async (payload: TSlot) => {
  const { serviceId, date, startTime, endTime } = payload;


  const service = await Services.findById(serviceId);
  const slotDuration = service?.duration;
  const existSlot = await Slots.findOne({ serviceId, date });
  if (!existSlot) {
    const slots : TSlot[] = [];
  
  let start = new Date(`${date} ${startTime}`);
  const end = new Date(`${date} ${endTime}`);

  while(start < end){
    const nextSlot = new Date(start.getTime() + slotDuration! * 60 * 1000);
    if(nextSlot > end) break;

    slots.push({
      serviceId,
      date,
      startTime: start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true}),
      endTime: nextSlot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true})
    })

    start = nextSlot;
  }
  const result = await Slots.create(slots);
  return result
  } else {
    console.log('slot exist');
  }
};

export const SlotServices = {
  createSlotsIntoDB,
};
