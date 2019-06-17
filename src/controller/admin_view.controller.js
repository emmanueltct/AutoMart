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
    const state=req.query.state;
    const manufacturer=req.query.manufacturer;
    const bodytype=req.query.body_type;

      

if(c_status=="available" && !max_p && !min_p && !state &&!manufacturer && !bodytype){
const car_av=car.filter(c=>c.status==c_status);
 if(car_av.length>0){
        res.status(200).json({
        status:200,
        data:car_av
    })
    }else{
        res.status(400).json({
            status:400,
            error:'no car with this status found'
        })
     }
   
}
    
else if(c_status=="available" && max_p && min_p && !state &&!manufacturer && !bodytype){

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
}else if(c_status=="available" && state && !max_p && !min_p &&!manufacturer && !bodytype ){

    const car_state=car.filter(c=>c.status==c_status && c.state==state);
  
        if(car_state.length>0){
            res.status(200).json({
                status:200,
                data:car_state
                    })

        }else{
            res.status(400).json({
            status:400,
            error:'no car with this state '
            })
        }
}



else{
    return res.status(400).json({
        status:400,
        error:'no result found use correct keywords'
    });
    }
            
    }
}




