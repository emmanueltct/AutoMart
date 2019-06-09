
import car from '../models/car.model';
import user from '../models/user.model';
import express  from 'express' ;
import bodyParser from 'body-parser';

import {price_Updatevalidation} from '../validation/car.validation';

export const update_price=(req,res)=>{
    const car_id=parseInt(req.params.id);
    const car_update=car.find(cars=>cars.id===car_id);
    if(!car_update) return res.status(400).json({
        status:400,
        error:'Id of car not found'
    });

    const {error}=price_Updatevalidation(req.body);
    if(error) return res.status(400).json({
        status:400,
        error:error.details[0].message
    });

    car_status=req.params.price;
    const newcar_update=car.find(cars=>cars.ids===car_id && cars.status===car_price); 
    //console.log(car_update);
    newcar_update.price=req.body.price;
    return res.status(200).json({
        status:200,
        data:newcar_update
    });

}
