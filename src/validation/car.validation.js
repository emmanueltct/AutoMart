import Joi from '@hapi/joi';

function createvalidation (data){
    const  carschema ={
            owner :Joi.number().integer().required(),
           
            state:Joi.string().min(2).required(),
            status :Joi.string().required().default('available'),
            price :Joi.number().required(),
            manufacturer:Joi.string().min(2).required(),
            model :Joi.string().min(2).required(),
            body_type :Joi.string().min(2).required(),    
           
    }
  return  Joi.validate(data,carschema);  
}

function status_Updatevalidation (data2){
    const  statusSchema ={
            status:Joi.string().required(),        
    }
  return  Joi.validate(data2,statusSchema );  
}

function price_Updatevalidation (data3){
    const  sellerPriceSchema ={       
            price :Joi.number().required(), 
    }
  return  Joi.validate(data3, sellerPriceSchema);  
}

export { status_Updatevalidation, price_Updatevalidation,createvalidation };
