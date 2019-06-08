
import Joi from '@hapi/joi';

function signupvalidation (data){
    const  schema ={
        email:Joi.string().min(4).required().email(),
        first_name :Joi.string().min(4).required(),
        last_name : Joi.string().min(4).required(),
         password :Joi.string().min(4).required(),
         address : Joi.string().min(2).required(),
         is_admin :Joi.boolean(),
    }
  return  Joi.validate(data,schema);  
}



export {signupvalidation};