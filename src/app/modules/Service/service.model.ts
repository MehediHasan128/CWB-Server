import { model, Schema } from "mongoose";
import { TService } from "./service.interface";

const createServiceSchema = new Schema<TService>(
    {
      name: {
        type: String,
        required: [true, 'Name field is required'],
      },
      image : {
        type: String,
        required: [true, 'Price is required'],
      },
      description: {
        type: String,
        required: [true, 'Description field is required'],
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],
      },
      duration: {
        type: Number,
        required: [true, 'Duration is required'],
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    },
  );
  
  export const Services = model<TService>('Services', createServiceSchema);