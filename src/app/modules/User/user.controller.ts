import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";
import { SendResponce } from "../../utils/SendResponce";
import { UserServices } from "./user.services";

const createUser = CatchAsync(async(req, res) => {
    const data = await UserServices.CreateUserIntoDB(req.body);

    SendResponce(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'User signup successfully',
        data : data
    })
});

export const UserController = {
    createUser
}