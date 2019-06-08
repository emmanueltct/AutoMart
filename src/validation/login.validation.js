
import Joi from '@hapi/joi';


function loginvalidation (data){
    const  schema ={
        email:Joi.string().min(4).required().email(),
         password :Joi.string().min(4).required(),
    }
    return  Joi.validate(data,schema);   
}

export { loginvalidation };