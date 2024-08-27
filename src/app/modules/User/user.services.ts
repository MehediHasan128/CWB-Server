import { TUser } from "./user.interface";
import { User } from "./user.model";

const CreateUserIntoDB = async (payload : TUser) => {
    const user = await User.create(payload);
    const result = await User.findById(user._id).select('-password');
    return result;
};


export const UserServices = {
    CreateUserIntoDB
}