

import order from '../models/order.model';
import car from '../models/car.model';
import express  from 'express' ;
import bodyParser from 'body-parser';
import {orderUpdatevalidation} from '../validation/order.validation';

export const update_order=(req,res)=>{

    const order_id=parseInt(req.params.id);
    const order_update=order.find(orders=>orders.id===order_id);
    if(!order_update)return res.status(400).json({status:400,error:'Id of car not found'});

    
    if(order_update.status!='Pending')return res.status(400).json({status:400, error:'you can not modify the order as long as decision is taken'});

    const {error}= orderUpdatevalidation (req.body);
    if(error) return res.status(400).json({
        status:400,
        error:error.details[0].message
    });
    
    order.amount=req.body.amount;
    const new_order=[{
        id:order_update.id,
        buyer:order_update.buyer,
        car_id:order_update.car_id,
        status:order_update.status,
        old_price_offered:order_update.amount,
        new_price_offered:req.body.amount,
    }];
   
  return res.status(200).json({status:200,data:new_order});

}

