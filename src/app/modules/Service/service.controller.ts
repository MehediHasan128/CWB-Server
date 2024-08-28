import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";
import { SendResponce } from "../../utils/SendResponce";
import { CWBServices } from "./service.services";

const createService = CatchAsync(async(req, res) => {
    console.log(req.body);
    const data = await CWBServices.createServiceIntoDB(req.body);

    SendResponce(res, {
        statusCode : httpStatus.OK,
        success : true, 
        message : 'Service created successfully',
        data : data
    })
})  

const getAllService = CatchAsync(async(req, res) => {
    const data = await CWBServices.getAllServiceFromDB();

    SendResponce(res, {
        statusCode : httpStatus.OK,
        success : true, 
        message : 'Service retrieved successfully',
        data : data
    })
})

const getSingleServiceById = CatchAsync(async(req, res) => {
    const {id} = req.params;
    const data = await CWBServices.getServiceById(id);

    SendResponce(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service retrieved successfully',
        data: data,
      });
})

const updateService = CatchAsync(async(req, res) => {
    const {id} = req.params;
    const data = await CWBServices.updateService(id, req.body);

    SendResponce(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Service updated successfully',
        data: data,
      });
})

const deleteService = CatchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await CWBServices.deleteServiceById(id);
  
    SendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Service deleted successfully',
      data: data,
    });
  });


  export const ServiceController = {
    createService,
    getAllService,
    getSingleServiceById,
    updateService,
    deleteService
  }