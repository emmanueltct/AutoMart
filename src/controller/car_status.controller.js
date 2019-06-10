
import car from '../models/car.model';
import user from '../models/user.model';
import express  from 'express' ;
import bodyParser from 'body-parser';




  function carStatus(status){
    const car_av=car.filter(c=>c.status==status);
    
return car_av;
  }

  export{carStatus}