
import express  from 'express' ;
const car_router =express.Router();
import {auth} from '../middleware/authmiddleware'; 
import createCar from '../controller/car.controller';

import {update_status} from '../controller/car_status_update.controller.js';
import {update_price} from '../controller/car_price_update.controllerr';
import {singleCar} from '../controller/car_single.controller.js';
import deletePosted from '../controller/admin_delete.controller'
import {getCar} from '../controller/admin_view.controller';
import {getCar2} from '../controller/car_view.controller';

car_router.post('/',auth, createCar);

car_router.get('/',auth, getCar,getCar2);

car_router.get('/:id/',auth,singleCar);
car_router.patch('/:id/status',auth,update_status);
car_router.patch('/:id/price',auth,update_price);
car_router.delete('/:id',auth,deletePosted);


module.exports=car_router;