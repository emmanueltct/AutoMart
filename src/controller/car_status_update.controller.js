
import car from '../models/car.model';
import user from '../models/user.model';
import express  from 'express' ;
import bodyParser from 'body-parser';

import { status_Updatevalidation} from '../validation/car.validation';

export const update_status=(req,res)=>{
    const car_id=parseInt(req.params.id);
    const car_update=car.find(cars=>cars.id===car_id);
    if(!car_update)return res.status(400).json({
        status:400,
        error:'Id of car not found'
    });


    const {error}=status_Updatevalidation (req.body);
    if(error) return res.status(400).json({
        status:400,
        error:error.details[0].message
    });

    car_status=req.params.status;
    const tuscar_update_sta=car.find(cars=>cars.ids===car_id && cars.status===car_status); 
    if(!car_update_sta)return res.status(400).json({
        status:400,
        error:'Id of car not found'
    });


    car_update_sta.status=req.body.status;
     
    return res.status(200).json({
        status:200,
        data:car_update
    });

}

