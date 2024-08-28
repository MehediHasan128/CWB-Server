import { Types } from "mongoose"

export type TSlot = {
    serviceId : Types.ObjectId;
    date: string;
    startTime: string;
    endTime: string;
    isBooked?: string;
}