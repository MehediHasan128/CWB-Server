import { Response } from "express";

type TResponce<T> = {
    statusCode : number;
    success : boolean;
    message ?: string;
    data : T;
}

export const SendResponce = <T>( res : Response, data : TResponce<T> ) => {
    res.status(data.statusCode).json({
        success : data.success,
        statusCode : data.statusCode,
        message : data.message,
        data : data.data
    })
}