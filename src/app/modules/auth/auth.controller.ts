import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";
import { SendResponce } from "../../utils/SendResponce";
import { AuthServices } from "./auth.services";

const UserSignUp = CatchAsync(async (req, res) => {
    const result = await AuthServices.UserSignUpIntoBD(req.body)

    SendResponce(res, {
        success : true,
        statusCode : httpStatus.OK,
        message : 'User sign up successfully',
        data : result
    })
})


export const AuthController = {
    UserSignUp
}