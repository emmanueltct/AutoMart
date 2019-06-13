/* eslint-disable import/no-named-as-default */
/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

import express from 'express';
import userLogin from '../controller/login.controller';

const login_router=express.Router();

login_router.post('/', userLogin);

export default login_router;
