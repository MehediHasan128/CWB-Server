import { TService } from "./service.interface";
import { Services } from "./service.model";

const createServiceIntoDB = async (payload : TService) => {
    const result = await Services.create(payload);
    return result
}

const getAllServiceFromDB = async() => {
    const result = await Services.find();
    return result;
}

const getServiceById = async (serviceId : string) => {
    const result = await Services.findById(serviceId);
    return result;
}

const updateService = async (serviceId : string, payload : Partial<TService>) => {
    const result = await Services.findByIdAndUpdate(serviceId, payload, { new : true });
    return result;
}

const deleteServiceById = async (serviceId : string) => {
    const result = await Services.findByIdAndUpdate(serviceId, {isDeleted : true}, {new : true});
    return result
}


export const CWBServices = {
    createServiceIntoDB,
    getAllServiceFromDB,
    updateService,
    getServiceById,
    deleteServiceById
}