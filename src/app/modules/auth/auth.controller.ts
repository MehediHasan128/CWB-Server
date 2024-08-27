import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";
import { SendResponce } from "../../utils/SendResponce";
import { AuthServices } from "./auth.services";

const userLogin = CatchAsync(async(req, res) => {
    const result = await AuthServices.loginUser(req.body);

    SendResponce(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'User is logged in succesfully!',
        data : []
    })
})

export const AuthController = {
    userLogin
}