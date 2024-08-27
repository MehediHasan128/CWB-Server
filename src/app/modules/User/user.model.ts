import { model, Schema } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";

const UserSchema = new Schema<TUser, UserModel>({
    name : {
        type : String,
        required : [ true, 'Name is required']
    },
    email : {
        type : String,
        required : [ true, 'Email field is required']
    },
    password : {
        type : String,
        required : [ true, 'Password field is required']
    },
    number : {
        type : String,
        required : [ true, 'Phone number is required']
    },
    address : {
        type : String,
        required : [ true, 'Address is required']
    },
    role : {
        type : String,
        enum : [ 'admin', 'user' ],
        required : true
    }
},
{
    timestamps : true
});


UserSchema.pre('save', async function(next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_round));
    next();
})

UserSchema.statics.isUserExistsByCustomId = async function(email : string) {
    return await User.findOne({ email }).select('+password');
}

UserSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword,
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  };


export const User = model<TUser, UserModel>('User', UserSchema)