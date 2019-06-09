

import car from '../models/car.model';

import express  from 'express' ;
import bodyParser from 'body-parser';

export const singleCar=(req,res)=>{
    const car_id=parseInt(req.params.id);
    const singlecar=car.find(cars=>cars.id===car_id);
    if(!singlecar)return res.status(400).json({
        status:400,
        error:'Id of car not found'
    });
    
   return res.status(200).json({
        status:200,
        data:singlecar
    });
}
