

import order from '../models/order.model';
import car from '../models/car.model';
import express  from 'express' ;
import bodyParser from 'body-parser';
import {ordervalidation } from '../validation/order.validation';

export const createOrder=(req,res)=>{

    const {error}=ordervalidation (req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const car_id=parseInt(req.body.car_id);
    const car_order=car.find(cars=>cars.id===car_id);
    if(!car_order)return res.status(400).json({status:200,error:'the car not found'});

    if(car_order.status!='available')return res.status(400).json({status:200,error:'the car not available is marked as sold'});

    const new_order={
    id:order.length+1, 
    car_id:car_order.id,
    created_on:Date.now(),
    status :'Pending', 
    price :car_order.price ,
    price_offered:req.body.amount
    };

    order.push(new_order);
    //console.log(new_order);
    return  res.status(200).json({
        status:200,
        data:new_order
        });

}



