import { TUserSignUp } from './auth.interface';
import { User } from './auth.model';

const UserSignUpIntoBD = async (payload: TUserSignUp) => {
  const user = await User.create(payload);
  const result = await User.findById(user._id).select('-password');
  return result;
};

export const AuthServices = {
  UserSignUpIntoBD,
};
