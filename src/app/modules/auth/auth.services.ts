import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TUserLogin } from "./auth.interface";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUser = async(payload : TUserLogin) => {
    const user = await User.isUserExistsByCustomId(payload.email);

    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !')
    }

    if(!(await User.isPasswordMatched(payload?.password, user?.password))){
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched')
    }

    const jwtPayload = {
        userId : user.email,
        role : user.role
    }

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string
    )

    return {
        accessToken
    }
}

export const AuthServices = {
    loginUser
}