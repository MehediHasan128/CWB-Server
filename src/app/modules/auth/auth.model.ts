import bcrypt from 'bcrypt';
import { model, Schema } from "mongoose";
import { TUserSignUp } from "./auth.interface";
import config from '../../config';

const createUserSignUpSchema = new Schema<TUserSignUp>({
    name : {
        type : String,
        required : [ true, 'Name is required' ]
    },
    email : {
        type : String,
        required : [ true, 'Email field is required' ]
    },
    password : {
        type : String,
        required : [ true, 'Password field is required' ]
    },
    number : {
        type : String,
        required : [ true, 'Phone number is required' ]
    },
    address : {
        type : String,
        required : [ true, 'Address field is required' ]
    },
    role : {
        type : String,
        enum : [ 'admin', 'user' ],
        required : true
    }
},
{
    timestamps : true
})


createUserSignUpSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(
        user.password, Number(config.bcrypt_salt_round)
    );
    next();
})



export const User = model<TUserSignUp>('User', createUserSignUpSchema)