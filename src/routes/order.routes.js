import express  from 'express' ;
const order_router =express.Router();
import {auth} from '../middleware/authmiddleware'; 
import {createOrder} from '../controller/new_order.controller.js';
import {update_order} from '../controller/update_order.controller.js';

order_router.post('/',auth, createOrder);

order_router.patch('/:id/price',auth,update_order);

module.exports=order_router;