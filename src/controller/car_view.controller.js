
import car from '../models/car.model';
import user from '../models/user.model';
import express  from 'express' ;
import bodyParser from 'body-parser';

//import { status_Updatevalidation, price_Updatevalidation,createvalidation } from '../validation/car.validation';


export const getCar=(req,res)=>{
    if(car.length>0)return res.status(200).json({
        status:200,
        data:car
    })
}



