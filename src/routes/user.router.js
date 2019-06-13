/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

import express from 'express';
import createUser from '../controller/user.controller';

const user_router = express.Router();

user_router.post('/signup', createUser);
export default user_router;
