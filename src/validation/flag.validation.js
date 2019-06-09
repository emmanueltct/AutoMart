import Joi from '@hapi/joi';

function reportflag (data){
    const  flagschema ={
            car_id :Joi.number().integer().required(),
            created_on:joi.date().timestamp().required(),
            
            reason:Joi.string().min(2).required(),
             description:Joi.string().min(2).required(),
             
           
    }
  return  Joi.validate(data,flagschema);  
}

