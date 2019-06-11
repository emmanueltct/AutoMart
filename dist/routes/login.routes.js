import express  from 'express' ;
const login_router=express.Router();
import {userLogin} from '../controller/login.controller.js';

login_router.post('/',userLogin);

module.exports=login_router;