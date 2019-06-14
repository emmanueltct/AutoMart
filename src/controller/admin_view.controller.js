import car from '../models/car.model';

import express  from 'express' ;
import bodyParser from 'body-parser';

//import { status_Updatevalidation, price_Updatevalidation,createvalidation } from '../validation/car.validation';


export const getCar=(req,res, next)=>{
    const admin=req.user_token.user_token;
    if (admin.is_admin == 'true') {
        if (car.length > 0) {
            return res.status(200).json({
                status: 200,
                data: car
            });

        } else {

            return res.status(400).json({
                status: 400,
                error: 'no car published'
            });
        }

    } else {


    const c_status=req.query.status;
    const max_p=req.query.max_price;
    const min_p=req.query.min_price;


if(typeof c_status!=="undefined" && typeof max_p==="undefined" && min_p==="undefined"){
const car_av=car.filter(c=>c.status==c_status);
 if(car_v.length>0){
        res.status(200).json({
        status:200,
        data:car_v
    })
    }else{
        res.status(400).json({
            status:400,
            error:'no car with this status found'
        })
     }
   
}
    
else if(typeof c_status!=="undefined" && typeof max_p!=="undefined" && min_p!=="undefined"){

    const car_pr=car.filter(c=>c.status==c_status && c.price>=min_p && c.price<=max_p);
  
        if(car_pr.length>0){
            res.status(200).json({
                status:200,
                data:car_pr
                    })

        }else{
            res.status(400).json({
            status:400,
            error:'no car with this price range found'
            })
        }
}else{
    return res.status(400).json({
        status:400,
        error:'you are not admin of this system only you allowed to see available unsold car'
    });
    }
            




    }
}




