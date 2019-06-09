
import car from '../models/car.model';
import user from '../models/user.model';
import express  from 'express' ;
import bodyParser from 'body-parser';

import {createvalidation } from '../validation/car.validation';

export const createCar=(req,res)=>{

    const {error}=createvalidation (req.body);
    if(error) return res.status(400).json({
        status:400,
        error:error.details[0].message
    });

    const owner=user.find(exist=>exist.id===parseInt(req.body.owner));
 if(!owner)return res.status(400).json({
    status:400,
    error:'email of this id not found you should create new account'
});  

        const new_car={
        id:car.length+1,
        email:owner.email, 
        created_on:Date.now(),
        state:req.body.state, 
        status :req.body.status,
        price :req.body.price ,
        manufacturer:req.body.manufacturer,
        model :req.body.model,
        body_type :req.body.body_type
        };

    car.push(new_car);
    
    return res.status(200).json({
        status:200,
        data:new_car
    });
}
