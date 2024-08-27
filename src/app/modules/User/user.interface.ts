import { Model } from "mongoose";

export type TUser = {
    name : string;
    email : string;
    password : string;
    number : string;
    address : string;
    role : 'admin' | 'user'
}

export interface UserModel extends Model<TUser> {
    isUserExistsByCustomId(email: string): Promise<TUser>;
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
  }