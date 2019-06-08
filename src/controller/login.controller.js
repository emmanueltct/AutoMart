
import user from '../models/user.model';
import express  from 'express' ;
import bcrypt  from'bcryptjs';
import jwt from 'jsonwebtoken' ;
import {loginvalidation } from '../validation/login.validation';


// user login part
           
export const userLogin=(req,res)=>{

    //input validation;
    const {error}=loginvalidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
   
   //checking existing user
    
    const new_email=req.body.email;
    const exist_email=user.find(exist=>exist.email===new_email);
    if(!exist_email)return res.status(400).send('user email not found you should create new account') ;  
   
    //checking user password
    
    
   if(exist_email.password !== req.body.password)return res.status(400).send('Password not match with email');
   
   const response={
       'id' :exist_email.id,
       'first_name' :exist_email.first_name, 
       'last_name' :exist_email.last_name,
       'email' : exist_email.email 
   };

   const user_token={
    'id' :exist_email.id,
    'first_name' :exist_email.first_name, 
    'last_name' :exist_email.last_name,
    'email' : exist_email.email,
    "is_admin":exist_email.is_admin,
}
   const token=jwt.sign({user_token},'scretkey');
   res.header('x-auth-token',token);

   res.status(400).json({
       status:200,
       token:token,
       data:response
         });
    
      }
   