export type TUserSignUp = {
    name : string;
    email : string;
    password : string;
    number : string;
    address : string;
    role : 'admin' | 'user'
}

export type TUserLogin = {
    email : string;
    password : string;
}