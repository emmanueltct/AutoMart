import express  from 'express' ;
const user_router=express.Router();
import {createUser,getUser} from '../controller/user.controller.js';

user_router.post('/signup', createUser);

user_router.get('/signup', getUser);

module.exports=user_router;