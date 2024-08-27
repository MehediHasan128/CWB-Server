import { model, Schema } from "mongoose";
import { TUserSignUp } from "./auth.interface";

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



export const User = model<TUserSignUp>('User', createUserSignUpSchema)