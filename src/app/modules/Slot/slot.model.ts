import { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";

const createSlotSchema = new Schema<TSlot>(
    {
      serviceId: {
        type: Schema.Types.ObjectId,
        required: [true, 'Service field is required'],
        ref: 'Services',
      },
      date: {
        type: String,
        required: [true, 'Date id required'],
      },
      startTime: {
        type: String,
        required: [true, 'Start time is required'],
      },
      endTime: {
        type: String,
        required: [true, 'End time is required'],
      },
      isBooked: {
        type: String,
        enum: ['available', 'booked'],
        default: 'available',
      },
    },
    {
      timestamps: true,
    },
  );
  
  export const Slots = model<TSlot>('Slot', createSlotSchema);