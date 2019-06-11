import car from '../models/car.model';

import express  from 'express' ;
import bodyParser from 'body-parser';

//import { status_Updatevalidation, price_Updatevalidation,createvalidation } from '../validation/car.validation';


export const getCar=(req,res, next)=>{
    const admin=req.user_token.user_token;


         if(admin.is_admin=='true'){
            
            if(car.length>0){
                return res.status(200).json({
                status:200,
                data:car
            });

         }else{

            return res.status(400).json({
                status:400,
                error:'no car published'
            });
        }
         
        }else{
          
            next();
        }
    }




