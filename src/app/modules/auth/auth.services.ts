import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TUserLogin } from "./auth.interface";

const loginUser = async(payload : TUserLogin) => {
    const user = await User.isUserExistsByCustomId(payload.email);

    if(!(await User.isPasswordMatched(payload?.password, user?.password))){
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched')
    }
}

export const AuthServices = {
    loginUser
}